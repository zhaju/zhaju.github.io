const bufferPx = 150
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElement = document.querySelector(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElement) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElement.classList.add("in-view")
      } else {
        tocEntryElement.classList.remove("in-view")
      }
    }
  }
  scrollTocToCurrent()
})

function scrollTocToCurrent() {
  const tocList = document.querySelector("#toc-content > ul") as HTMLElement | null
  if (!tocList) return
  if (tocList.scrollHeight <= tocList.clientHeight) return

  const inViewLinks = tocList.querySelectorAll<HTMLElement>("a.in-view")
  const activeLink = inViewLinks[inViewLinks.length - 1]
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

window.addEventListener("resize", setupToc)
document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
