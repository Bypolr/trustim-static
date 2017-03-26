// menubar component

import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import { Sources, Sinks } from '../interfaces';

function indent(sources) {
  const DOM = sources.DOM;

  return xs.merge(
      DOM.select('.js-home').events('click')
        .mapTo({type: 'home'}),
      DOM.select('.js-chat').events('click')
        .mapTo({type: 'chat'}),
  );
}

function model(action$) {
  return action$.map(action => ({ selected: action.type }))
    .startWith({selected: 'chat'});
}

function view(state$) {
  return state$.map((state) => (
    <nav className='menubar flex'>
      <div className="column user-icon-wrap flex">
        <a href="#" className="user-icon-link">
          <div className="user-icon"></div>
        </a>
      </div>
      <ul className='menus column'>
        <li className={'menu js-home ' + (state.selected === 'home' ? 'selected' : '')}>
          <span className='menu-icon iconfont'>&#xe607;</span>
        </li>
        <li className={'menu js-chat ' + (state.selected === 'chat' ? 'selected' : '')}>
          <span className='menu-icon iconfont'>&#xe787;</span>
        </li>
      </ul>
    </nav>
  ));
}

export default function Menubar(sources?: Sources): Sinks {
  let vdom$ = view(model(indent(sources)));

  return {
    DOM: vdom$
  };
}
