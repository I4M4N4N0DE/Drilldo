import{_ as S,u as y,a as k,s as x,i as m,r as M,o as p,c as f,b as o,w as h,v as C,m as V,d as c,f as Q,e as N,g as R,Q as T,p as B,h as E}from"./index-321b7b4c.js";import{Q as U}from"./QuestionComponent-08ab841b.js";import{Q as $}from"./QuestionControlComponent-dc23bfbe.js";const a=i=>(B("data-v-48b5ddb2"),i=i(),E(),i),q={class:"view-container"},A={key:0,class:"test-selector"},D=a(()=>o("h1",null,"Create your own test:",-1)),j={class:"form"},z=a(()=>o("span",null,"Select number of questions to test:",-1)),F={class:"form"},G=a(()=>o("span",null," Select maximum number of answers to be shown per question (0 to show all) ",-1)),H={class:"form"},J=a(()=>o("span",null," Do you want to use statistics to prefer questions where you make mistakes more often? ",-1)),K=a(()=>o("span",{class:"but-text"},"Start",-1)),L=[K],O={key:1,class:"test"},P=a(()=>o("h1",null,"Testing your knowledge",-1)),W={class:"test-container"},X={__name:"TestView",setup(i){const r=y(T),u=k();r.where("showResults",!0).update({showResults:!1}),r.where("score",s=>s>=1).update({score:0}),r.where("maxScore",s=>s>=1).update({maxScore:0}),u.index=0,u.showMobileMenu=!1,u.viewMode=!1,u.editMode=!1;const{index:w}=x(u),{questions:d}=x(u),n=m(r.all().length),l=m(4),v=m(!0),_=m(!1);r.all().length===0&&M.push("/");function b(){const s=r.with("answers").get();v.value?s.sort((e,t)=>e.numIncorrect+e.numCorrect===0&&t.numIncorrect+t.numCorrect!==0||e.numIncorrect+e.numCorrect!==0&&t.numIncorrect+t.numCorrect===0?e.numIncorrect+e.numCorrect<t.numIncorrect+t.numCorrect?-1:1:e.numIncorrect!==t.numIncorrect?e.numIncorrect>t.numIncorrect?-1:1:e.numCorrect!==t.numCorrect?e.numCorrect<t.numCorrect?-1:1:Math.random()>.5?1:-1):s.sort((e,t)=>Math.random()>.5?1:-1),n.value>=0&&(s.length=n.value,s.sort((e,t)=>Math.random()>.5?1:-1)),s.forEach(function(e){e.answers.sort((t,Y)=>Math.random()>.5?1:-1),l.value>0&&l.value<e.answers.length&&(e.answers.length=l.value),e.answers.forEach(function(t){t.correct&&e.maxScore++}),r.save({id:e.id,maxScore:e.maxScore})}),d.value=s,_.value=!_.value}function I(){n.value>r.all().length?n.value=r.all().length:n.value<0&&(n.value=1)}function g(){n.value<0&&(n.value=0)}return(s,e)=>(p(),f("div",q,[_.value?(p(),f("div",O,[P,o("div",W,[c(d).length>=1?(p(),Q(U,{question:c(d)[c(w)],key:c(d)[c(w)].id},null,8,["question"])):N("",!0),R($)])])):(p(),f("div",A,[D,o("div",j,[z,h(o("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),onInput:e[1]||(e[1]=t=>I())},null,544),[[C,n.value]])]),o("div",F,[G,h(o("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),onInput:e[3]||(e[3]=t=>g())},null,544),[[C,l.value]])]),o("div",H,[J,h(o("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>v.value=t)},null,512),[[V,v.value]])]),o("button",{class:"button",onClick:e[5]||(e[5]=t=>b())},L)]))]))}},oe=S(X,[["__scopeId","data-v-48b5ddb2"]]);export{oe as default};