const quiz=[
  {
    question: "第一問　今スタバにない食べ物はどれ？",
    answer :[
      "レモンレアチーズバー",
      "ティラミス",
      "照り焼きチキンフィローネ",
      "ベリーヨーグルト"],
       correct:"ティラミス"
  },
  {
    question: "第二問　スターバックスが日本に上陸したのはいつ？",
    answer :[
      "1989年",
      "1996年",
      "2001年",
      "2005年"],
       correct:"1996年"
  },
  {
    question: "第三問　ホイップクリームがのってるのはどれ？",
    answer :[
      "コーヒーフラペチーノ",
      "カフェモカ",
      "キャラメルマキアート",
      "アフォガードフラペチーノ"],
       correct:"カフェモカ"
  },
  {
    question: "第四問　スタバの新作フラペチーノの名前は？",
    answer :[
      "バナナンアーモンドミルクフラペチーノ",
      "ごろっと贅沢バナナフラペチーノ",
      "バナナインバナナフラペチーノ",
      "フレッシュバナナフラペチーノ"],
       correct:"バナナンアーモンドミルクフラペチーノ"
  },
  {
    question: "第五問　今シーズンスタバでリニューアルしたのは？",
    answer :[
      "アメリカンワッフル",
      "シナモンロール",
      "ハムチーズフィローネ",
      "シュガードーナツ"],
    correct:"アメリカンワッフル"
  }
  ];
  console.log(quiz);
  const quizLegth= quiz.length;
  let quizindex= 0;
  let score=0;
  
  console.log(quizLegth);
  const $button=document.getElementsByTagName("button");
  let buttonLength = $button.length;

  console.log($button);
     //クイズの問題文、選択肢の定義
  
     const setupQuiz=()=>{
      console.log(document.getElementById("js-question").textContent=quiz[quizindex].question );
  
      let buttonindex=0;
  
      while(buttonindex<buttonLength){
      $button[buttonindex].textContent=quiz[quizindex].answer[buttonindex];
      buttonindex++;
      }
    }
  setupQuiz();
  const clickhandler=(e)=>{ if(e.target.textContent==quiz[quizindex].correct){
    window.alert("正解！！");
    score++;
   }else{
    window.alert("残念！");
   }
   quizindex++;
  if(quizindex<quizLegth){
    setupQuiz();
   }else{
    window.alert("終了！あなたの正解数は..." + score + "/" + quizLegth + "問です！お疲れさまでした！！");
  }
  };
  
//buttonをクリックしたら正誤判定
let handlerindex=0;
  
while(handlerindex<buttonLength){
  $button[handlerindex].addEventListener("click",(e)=>{
    clickhandler(e);
  });
    handlerindex++;
  }
