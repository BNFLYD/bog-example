import 'htmx.org'
import Alpine from 'alpinejs'

Alpine.data('contador', (fin, sufijo = '', miles = false) => ({
  n: 0,
  fin,
  sufijo,
  miles,
  init() {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1200, 1)
        const v = Math.round(this.fin * (1 - Math.pow(1 - p, 3)))
        this.n = this.miles ? v.toLocaleString('es-MX') : v
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(this.$el)
  },
  get texto() {
    return `${this.n}${this.sufijo}`
  },
}))

window.Alpine = Alpine
Alpine.start()