import { Component, Vue,Prop } from 'vue-property-decorator';

@Component

export default class App extends Vue{

    @Prop({ required: false })
    public title?: string;

    public back(){
        this.$router.go(-1);
    }
    protected render(){
      return(
          <div>
              {/* 返回上一页按钮 */}
              <div onClick={this.back}> 上一页 </div>
              <div>
                  {this.title}
              </div>
          </div>
      );
  }
}