function solve() {
  const elements =Array.from( document.querySelectorAll('a'));
  const counters = elements.map(el=>el.nextElementSibling.innerText.split(' ')[1])
  const container = document.querySelector('.middled');
  container.addEventListener('click', function (e) {
    const target = e.target;
    const parent = e.target.parentNode;
    const notTargetAncheor = target.localName !== 'a';
    const notTargetParentAnchor = parent.localName !== 'a';

    if (notTargetAncheor && notTargetParentAnchor) { return; }
    const targetAnchor = notTargetAncheor ? parent : target;

    const counterIndex = elements.indexOf(targetAnchor);
    if(counterIndex === -1){return;}
    counters[counterIndex]++;
   const paragraph = targetAnchor.nextElementSibling;
   paragraph.innerText = `visited ${counters[counterIndex]} times`
  })
}