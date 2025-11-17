import { ReactP5Wrapper } from "react-p5-wrapper"

const Sketch = p5 => {
  let angle = p5.PI / 4

  p5.setup = () => {
    p5.createCanvas(320, 240)
    p5.pixelDensity(Math.min(2, window.devicePixelRatio || 1))
    p5.noFill()
    p5.stroke("#c7d2fe")     
    p5.strokeWeight(3)
  }

  p5.draw = () => {
    p5.clear()
    p5.translate(p5.width / 2, p5.height - 12)

    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16)

    const usable = p5.height - 20
    const baseLen = usable / 3.1

    branch(baseLen)
  }

  function branch(len) {
    p5.line(0, 0, 0, -len)
    p5.translate(0, -len)
    if (len > 4) {
      p5.push(); p5.rotate(angle);  branch(len * 0.67); p5.pop()
      p5.push(); p5.rotate(-angle); branch(len * 0.67); p5.pop()
    }
  }
}

export default function FractalTree() {
  return (
    <div style={{ width: 320, height: 240, margin: "0 auto", pointerEvents: "none" }}>
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  )
}
