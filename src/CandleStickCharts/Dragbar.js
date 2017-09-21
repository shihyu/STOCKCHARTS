class Dragbar {
  static margin = {
    left: 0,
    right: 0,
    top: 5,
    bottom: 0
  };

  constructor(parentNode, { x, y, width, height }) {
    this.element = parentNode.append('g');
    this.options = { x, y, width, height: height - Dragbar.margin.top };

    this.element.attr(
      'transform',
      `translate(${x}, ${y + Dragbar.margin.top})`
    );
  }

  render() {
    let { width, height } = this.options;

    this.element
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height);
  }
}

export default Dragbar;
