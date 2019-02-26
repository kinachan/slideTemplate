// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  controlsLayout: 'edges',
  fragmentInURL: true,
  mouseWheel: true,
  transition: 'concave',  // none/fade/slide/convex/concave/zoom
  // parallaxBackgroundImage: './src/img/kina_space3.png', // e.g. "''"
  // parallaxBackgroundSize: '1536px 722px', // CSS syntax, e.g. "2100px 900px"
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    // { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
  ]
});

Reveal.configure({
  keyboard: {
    13: 'next',
  }
})
