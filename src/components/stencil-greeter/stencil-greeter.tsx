import { Component, Prop, Element, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'stencil-greeter',
  styleUrl: 'stencil-greeter.scss'
})
export class Greeter {

  @Prop() greeting: string;

  @Event() message: EventEmitter;

  @Element() element: HTMLElement;

  private onClick(event: MouseEvent) {
    console.log('stencil-greeter:onClick: ', event);
    console.log('Publishing message event up the DOM tree!');
    const inputVal = (document.querySelector('stencil-greeter input') as HTMLInputElement).value;
    this.message.emit(`${this.greeting} ${inputVal}!`);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your name" name="name" />
        <button onClick={(ev) => this.onClick(ev)}>greet</button>
      </div>
    );
  }
}
