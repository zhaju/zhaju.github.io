type TocHeading = { header: HTMLElement; link: HTMLElement }

let headings: TocHeading[] = []
let activeLink: HTMLElement | null = null
let pendingUpdate = false

// scroll-driven rather than IntersectionObserver based: when scrolling fast a header
// can cross the whole viewport within a single frame, in which case its intersection
// state never changes and no entry is ever delivered, leaving `in-view` stale
function updateTocHighlight() {
  pendingUpdate = false
  if (headings.length === 0) return

  // read every position first so the class writes below don't interleave with layout
  const windowHeight = window.innerHeight
  const inView = headings.map(({ header }) => header.getBoundingClientRect().top < windowHeight)

  let current: HTMLElement | null = null
  headings.forEach(({ link }, i) => {
    link.classList.toggle("in-view", inView[i])
    if (inView[i]) current = link
  })

  if (current !== activeLink) {
    activeLink = current
    scrollTocToCurrent()
  }
}

function requestTocUpdate() {
  if (pendingUpdate) return
  pendingUpdate = true
  requestAnimationFrame(updateTocHighlight)
}

function scrollTocToCurrent() {
  const tocList = document.querySelector("#toc-content > ul") as HTMLElement | null
  if (!tocList) return
  if (tocList.scrollHeight <= tocList.clientHeight) return

  if (!activeLink) {
    tocList.scrollTop = 0
    return
  }

  const li = activeLink.closest("li") as HTMLElement | null
  if (!li) return

  const target = li.offsetTop - tocList.clientHeight / 2 + li.offsetHeight / 2
  const maxScroll = tocList.scrollHeight - tocList.clientHeight
  tocList.scrollTop = Math.max(0, Math.min(maxScroll, target))
}

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px"
}

function setupToc() {
  const toc = document.getElementById("toc")
  if (toc) {
    const collapsed = toc.classList.contains("collapsed")
    const content = toc.nextElementSibling as HTMLElement | undefined
    if (!content) return
    content.style.maxHeight = collapsed ? "0px" : content.scrollHeight + "px"
    toc.addEventListener("click", toggleToc)
    window.addCleanup(() => toc.removeEventListener("click", toggleToc))
  }
}

function onResize() {
  setupToc()
  requestTocUpdate()
}

window.addEventListener("resize", onResize)
document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  headings = []
  activeLink = null
  document
    .querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
    .forEach((header) => {
      const link = document.querySelector(`a[data-for="${header.id}"]`) as HTMLElement | null
      if (link) headings.push({ header, link })
    })

  window.addEventListener("scroll", requestTocUpdate, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", requestTocUpdate))

  updateTocHighlight()
})
