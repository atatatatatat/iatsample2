define(['pipAPI', 'https://cdn.jsdelivr.net/gh/atatatatatat/iatsample2/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            '輝かしい', '元気', '最高', '見事な', 
            'すばらしい', '正当', '良い', '正しい', 
            '好き','うれしい', '喜び', '幸運な', 
            'きれい', 'あたたかい', '明るい', 'おもしろい', 
            '快い', '積極的', '友好的な','幸せな', 
            '優秀な', '栄光', '平和', '笑顔', 
            'かわいい', '満足な', '楽しい', '素敵な', 
            '祝福', '愛情', '魅力ある', '感動']);
  var negWords = API.shuffle([
            '悪い', '劣っている', '間違い', '不快', 
            '嫌い', '不当', '失敗', '吐き気', 
            '不運な', 'きたない', '痛ましい', '最低', 
            'つめたい', 'いじわる', 'つまらない', '暗い', 
            '恐ろしい','がっかり', '毒', '悲しみ',  
            '不正', '苦悩', 'みにくい', '邪悪な', 
            '困る', 'にくしみ', 'いらいら', '災難', 
            'わざわい', '弱い', 'ひどい', '怒り']);
	return iatExtension({
		category1 : {
			name : '高齢者高齢者', //Will appear in the data.
			title : {
				media : {word : '高齢者高齢者'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'om1.jpg'},
                {image: 'om2.jpg'},
                {image: 'om3.jpg'},
                {image: 'of1.jpg'},
                {image: 'of2.jpg'},                 
                {image: 'of3.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : '若い者', //Will appear in the data.
			title : {
				media : {word : '若い者'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'ym1.jpg'},
                {image: 'ym2.jpg'},
                {image: 'ym3.jpg'},
                {image: 'yf1.jpg'},
                {image: 'yf2.jpg'},
                {image: 'yf3.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
	attribute1 :
		{
			name : '悪い',
			title : {
				media : {word : '悪い'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : '良い',
			title : {
				media : {word : '良い'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
