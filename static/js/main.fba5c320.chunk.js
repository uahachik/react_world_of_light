(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/saving.4d40eac7.png"},32:function(e,t,n){e.exports=n.p+"static/media/buildings.5e68755d.svg"},33:function(e,t,n){e.exports=n.p+"static/media/house.b2d3c123.png"},34:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(30),i=n.n(r),c=n(2),l=n(5),s=n(6),u=n(8),h=n(7),p=n(1),d=n(9),m=function(e){return a.a.createElement("div",{className:"World-Component"},a.a.createElement("button",{onClick:e.onPowerPlant,style:{width:"150px",height:"40px",marginTop:"20px"}},"Create Power Plant"),a.a.createElement("span",{className:"Rules PowerPlantsRules"},"Each Power Plant is Alive by default but can be killed and repaired after (click Power Plant). Power plant which is not Alive doesn't generate any electricity, but all connectivities still remain."),a.a.createElement(a.a.Fragment,null,e.children))},y=n(31),f=n.n(y),b=n(32),v=n.n(b),g=n(13),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).getKilledColor=n.getKilledColor.bind(Object(p.a)(n)),n.getKilledImage=n.getKilledImage.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getKilledColor",value:function(){return this.props.power.isAlive?{backgroundColor:"blue"}:{backgroundColor:"#2e2e2e"}}},{key:"getKilledImage",value:function(){return this.props.power.isAlive?a.a.createElement("img",{src:f.a,alt:"I'm an alive PowerPlant!",style:{width:"50px"}}):a.a.createElement("img",{src:v.a,alt:"I'm a killed PowerPlant!",style:{width:"50px"}})}},{key:"render",value:function(){var e=this;return a.a.createElement(g.Animated,{animationIn:"bounceInUp"},a.a.createElement("button",{onClick:this.props.onClickHandler.bind(this,this.props.power.key),style:this.getKilledColor(),onDragOver:function(t){return e.props.onDragOver(t)},onDrop:function(t){return e.props.onDrop(t,e.props.power.key)}},this.getKilledImage()))}}]),t}(a.a.Component),P=function(e){return a.a.createElement("div",{className:"World-Component"},a.a.createElement("button",{onClick:e.onHousehold,style:{width:"150px",height:"40px",marginTop:"20px"}},"Create Household"),a.a.createElement("span",{className:"Rules HouseholdRules"},"Any number of Households can be connected to any number of Power Plants which are Alive (drag & drop from Household to Power Plant), or to any number of other Households which have been connected to Power Plant (drag & drop from Household to another Household)."),a.a.createElement(a.a.Fragment,null,e.children))},k=n(33),E=n.n(k),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).getElectricity=n.getElectricity.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getElectricity",value:function(){return this.props.electricity.includes(this.props.house.key)?{backgroundColor:"blue"}:{backgroundColor:"#2e2e2e"}}},{key:"render",value:function(){var e=this;return a.a.createElement(g.Animated,{animationIn:"bounceInUp"},a.a.createElement("button",{style:this.getElectricity(),draggable:!0,onDragStart:function(t){return e.props.onDragStart(t,e.props.house.key)},onDragOver:function(t){return e.props.onDragOver(t)},onDrop:function(t){return e.props.onDrop(t,e.props.house.key)}},a.a.createElement("img",{src:E.a,alt:"I'm a Household!",style:{width:"50px"}})))}}]),t}(a.a.Component);var j=function(e,t,n,o){var a=!0,r=!1,i=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var s=c.value;if(s.key===Number(t)&&t<19&&!0===s.isAlive){var u=s.ppConnect;!0!==u.includes(Number(e))?(u.push(Number(e)),o.forEach(function(t){t.key===Number(e)&&(t.hasElectricity=!0)})):(1===n.reduce(function(t,n){return n.ppConnect.includes(Number(e))?t+=1:t},0)&&o.forEach(function(t){t.key===Number(e)&&(t.hasElectricity=!1)}),s.ppConnect=u.filter(function(t){return t!==Number(e)}))}}}catch(h){r=!0,i=h}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}};var C=function(e,t,n){var o=!0,a=!1,r=void 0;try{for(var i,c=n[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var l=i.value,s=l.connect;l.key===Number(t)&&t>19&&!0===l.hasElectricity&&(!0!==s.includes(Number(e))?(l.connect.push(Number(e)),n.forEach(function(t){t.key===Number(e)&&(t.hasConnectedToHH=!0)})):(l.connect=s.filter(function(t){return t!==Number(e)}),n.forEach(function(t){t.key===Number(e)&&(t.hasConnectedToHH=!1)})))}}catch(u){a=!0,r=u}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}},H=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={electricity:[],households:[],maxHousehold:27,maxPowerPlant:15,numHousehold:20,numPowerPlant:10,powerPlants:[]},n.createHousehold=n.createHousehold.bind(Object(p.a)(n)),n.createPowerPlant=n.createPowerPlant.bind(Object(p.a)(n)),n.connectivity=n.connectivity.bind(Object(p.a)(n)),n.killRepairPowerPlant=n.killRepairPowerPlant.bind(Object(p.a)(n)),n.householdHasElectricity=n.householdHasElectricity.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"createHousehold",value:function(){var e={connect:[],hasConnectedToHH:!1,hasElectricity:!1,key:this.state.numHousehold,supply:[]};this.state.numHousehold<=this.state.maxHousehold-1&&this.setState({numHousehold:this.state.numHousehold+1,households:[].concat(Object(c.a)(this.state.households),[e])})}},{key:"createPowerPlant",value:function(){var e={ppConnect:[],isAlive:!0,key:this.state.numPowerPlant,ppSupply:[]};this.state.numPowerPlant<=this.state.maxPowerPlant-1&&this.setState({numPowerPlant:this.state.numPowerPlant+1,powerPlants:[].concat(Object(c.a)(this.state.powerPlants),[e])})}},{key:"killRepairPowerPlant",value:function(e){var t=this.state,n=t.powerPlants,o=t.households;this.setState({powerPlants:n.map(function(t){if(t.key===e)if(t.isAlive=!t.isAlive,!0!==t.isAlive){var a=[],r=[];n.forEach(function(e){a=[].concat(Object(c.a)(a),Object(c.a)(e.ppConnect)).sort()});for(var i=0;i<a.length-1;i++)a[i+1]===a[i]&&r.push(a[i]);var l=a.filter(function(e){return!1===r.includes(e)}),s=t.ppConnect.filter(function(e){return l.includes(e)});o.forEach(function(e){s.includes(e.key)&&(e.hasElectricity=!1)}),t.ppSupply=Object(c.a)(t.ppConnect),t.ppConnect.length=0}else!0===t.isAlive&&(t.ppConnect=Object(c.a)(t.ppSupply),t.ppSupply.length=0,o.forEach(function(e){t.ppConnect.includes(e.key)&&(e.hasElectricity=!0)}));return t})}),this.householdHasElectricity(n,o)}},{key:"onDragStart",value:function(e,t){e.dataTransfer.setData("id",t)}},{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"connectivity",value:function(e,t){var n=e.dataTransfer.getData("id"),o=this.state,a=o.powerPlants,r=o.households;j(n,t,a,r),C(n,t,r),this.householdHasElectricity(a,r)}},{key:"householdHasElectricity",value:function(e,t){var n=[];e.forEach(function(e){n=[].concat(Object(c.a)(n),Object(c.a)(e.ppConnect))}),this.setState({electricity:n}),t.forEach(function(e){!0===e.hasElectricity?0!==e.supply.length&&(e.connect=Object(c.a)(e.supply),e.supply.length=0):0!==e.connect.length&&(e.supply=Object(c.a)(e.connect),e.connect.length=0),n=[].concat(Object(c.a)(n),Object(c.a)(e.connect))}),this.setState({electricity:n})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.numHousehold-20;t++)e.push(a.a.createElement(O,{key:t,house:this.state.households[t],electricity:this.state.electricity,onDragStart:this.onDragStart,onDragOver:this.onDragOver,onDrop:this.connectivity}));for(var n=[],o=0;o<this.state.numPowerPlant-10;o++)n.push(a.a.createElement(w,{key:o,power:this.state.powerPlants[o],onClickHandler:this.killRepairPowerPlant,onDragOver:this.onDragOver,onDrop:this.connectivity}));return a.a.createElement("div",{className:"World-Container"},a.a.createElement(P,{onHousehold:this.createHousehold},e),a.a.createElement(m,{onPowerPlant:this.createPowerPlant},n))}}]),t}(o.Component);n(29);var D=function(e){return a.a.createElement("div",{className:"World"},a.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.fba5c320.chunk.js.map