// 入口文件
import { Component, Vue } from 'vue-property-decorator';
import style from './style/App.module.less'
import Tab from './components/Tab/Tab'

import TopNav from './components/TopNav/Nav'
@Component 
export default class App extends Vue {

  protected render() {
    return(
        <div>
            <TopNav></TopNav>
            <router-view class={style.pages}></router-view>
            <Tab></Tab>
        </div>
    );

  }
}