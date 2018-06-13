function Human () {

}

Human.prototype.greet = () => 'Hello';

function Me() {
  console.log(this.constructor.prototype.__proto__);
}
Me.prototype.foo = 'foo';

var me = new Me();

console.log(me.constructor);

