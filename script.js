
	let btnIcons = document.querySelector('.sectionMain .container .aside .icons-aside');
	let btnIcons_aside = document.querySelector('.sectionMain .container .aside');
	let ul_aside = document.querySelector('.sectionMain .container .aside ul');
	btnIcons.addEventListener('click',()=>{
		btnIcons.classList.toggle('toggleIcins')
		if(btnIcons.classList.contains('toggleIcins')){
			btnIcons_aside.style.width=50+'px';
		}else{
		
			btnIcons_aside.style.width=250+'px';	
		}
		
	})
	if(localStorage.getItem('langPage')){
		
	}else{
		localStorage.setItem('langPage','an')
	
	}
	function localStorageLoang(){
		
		return lang = localStorage.getItem('langPage') || 'an';
	}
	localStorageLoang()
	let langePageDivs = document.querySelector('.langePageDivs select');
	langePageDivs.addEventListener('change',()=>{
		localStorage.setItem('langPage',langePageDivs.value);
		localStorageLoang()
		myLang();
		window.location.reload();
		
	})
	let storTag = document.querySelector('.'+localStorage.getItem('langPage'))
	storTag.setAttribute('selected','selected')
	
	function myLang(){
			if(lang==='an'){
				//document.body.style.direction='rtl';
				document.body.classList.add('langArabic');
				document.body.classList.remove('langEnglish');
				ul_aside.style.direction='rtl';
				btnIcons_aside.classList.add('langAn')
				btnIcons.innerHTML=`
								<i class="fa-solid fa-arrow-right"></i>
								<i class="fa-solid fa-arrow-left"></i>
								`;
				
			}
			
			if(lang==='en'){
			//	document.body.style.direction='lrt';
				document.body.classList.add('langEnglish');
				document.body.classList.remove('langArabic');
				ul_aside.style.direction='ltr';
				btnIcons_aside.classList.remove('langAn');
					btnIcons.innerHTML=`
									<i class="fa-solid fa-arrow-left"></i>
									<i class="fa-solid fa-arrow-right"></i>
									`;
			}
	}
	
	
	myLang()
	
	//********************	
	let ulArray =[
		{
			titleEn : 'all',
			titleAn :'ألكل',
		},
		{
			titleEn : 'Website',
			titleAn :'موقع ويب',
		},
		
		{
			titleEn : 'portfolio',
			titleAn :'معرض أعمال',
		},
		{
			titleEn : 'resume',
			titleAn :'سيرة ذاتية',
		},
		{
			titleEn : 'Restaurant ',
			titleAn :'مطعم',
		},
		{
			titleEn : 'Business ',
			titleAn :'نشاط تجاري',
		},
		{
			titleEn : 'API',
			titleAn :'واجهة برمجة التطبيقات',
		},
		{
			titleEn : 'Book',
			titleAn :'كتاب',
		},
		
		{
			titleEn : 'game',
			titleAn :'لعبة',
		},
		{
			titleEn : 'slider',
			titleAn : 'شريط التمرير'
		},
		{
			titleEn : 'animation',
			titleAn : 'الرسوم المتحركة'
		},
		{
			titleEn : 'scroll',
			titleAn : 'التمرير'
		},
		{
			titleEn : 'form',
			titleAn : 'نموذج'
		},
		{
			titleEn : 'Exercises',
			titleAn : 'تمارين'
		},
		
	
	];
	//********************
	let projectPage=[
			{
				title:'Website',
				title_p:'موقع ويب شخصي',
				dateTarget:'Website',
				ul:'https://m21wx.github.io/majid/'
			},
			{
				title:'موقع',
				title_p:'موقع يعرض مشاريع ',
				dateTarget:'Website',
				ul:'https://m21wx.github.io/profile-majid/'
			},
			//*************** Start portfolio ******************
				{
					title:'معرض أعمال',
					title_p:'معرض أعمال ',
					dateTarget:'portfolio',
					ul:'https://m21wx.github.io/portfolio-1/'
				},
			//*************** End portfolio ********************
			//*************** Start animation ******************
			{
				title:'الرسوم المتحركة',
				title_p:' mouse',
				dateTarget:'animation',
				ul:'https://m21wx.github.io/animation-1'
			},
			{
				title:'الرسوم المتحركة',
				title_p:' mousemove',
				dateTarget:'animation',
				ul:'https://m21wx.github.io/animation-2/'
			},
			{
				title:'الرسوم المتحركة',
				title_p:'click',
				dateTarget:'animation',
				ul:'https://m21wx.github.io/animation-3/'
				
			},
			{
				title:'bubbles',
				title_p:' mousemove',
				dateTarget:'animation',
				ul:'https://m21wx.github.io/exercises-2/'
			},
			{
				title:'الرسوم المتحركة',
				title_p:' mousemove',
				dateTarget:'animation',
				ul:'https://m21wx.github.io/-animation-4/'
			},
			//*************** End animation ******************
			//*************** Start Exercises ******************
			{
				title:'Exercises-1',
				title_p:' hover Link',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-1/'
			},
			{
				title:'Exercises-2',
				title_p:' mousemove',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-2/'
			},
			{
				title:'Exercises-3',
				title_p:' mousemove',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/-animation-4/'
			},
			{
				title:'navBar-1',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/navBar-1/'
			},
			{
				title:'navBar-2',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/navBar-2/'
			},
			{
				title:'navBar-3',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/navBar-3/'
			},
			{
				title:'navBar-4',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/navBar-4/'
			},
			{
				title:'navBar-5',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/navBar-5/'
			},
			{
				title:'تمارين',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-3/'
			},
			{
				title:'exercises-4',
				title_p:' تمارين',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-4/'
			},
			{
				title:'exercises-5',
				title_p:' الوقت والتاريخ',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-5/'
			},
			{
				title:'exercises-6',
				title_p:' touchmove',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-6/'
			},		
		
			//*************** End Exercises ******************
		
			//*************** Start slider ******************
			{
				title:'شريط التمرير',
				title_p:'click ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/progectSlider-1/'
			},
	
			{
				title:'slider',
				title_p:'click ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/slider-2/'
			},
			{
				title:'slider ',
				title_p:'click ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/slider-3/'
			},
			{
				title:'slider ',
				title_p:'click|setInterval',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/slider-4/'
			},
			{
				title:'slider ',
				title_p:'slider 3D ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/slider-5/'
			},
		
			//*************** End slider ******************
			//*************** Start resume ******************
			{
				title:'resume ',
				title_p:'سيرة ذاتية',
				dateTarget:'resume',
				ul:'https://m21wx.github.io/resume-1/'
			},
			//*************** End resume ******************
			//*************** Start scroll ******************
			{
				title:'scroll ',
				title_p:'التمرير',
				dateTarget:'scroll',
				ul:'https://m21wx.github.io/scroll-1/'
			},
			//*************** End scroll ******************
			//*************** Start form ******************
			{
				title:'form ',
				title_p:'نموذج',
				dateTarget:'form',
				ul:'https://m21wx.github.io/form-1/'
			},
			{
				title:'حساب العمر ',
				title_p:' احسب عمر ',
				dateTarget:'form',
				ul:'https://m21wx.github.io/age-calculation/'
			},
			{
				title:' To Do List ',
				title_p:'The To Do List ',
				dateTarget:'form',
				ul:'https://m21wx.github.io/ToDoList/'
			},
			//*************** End form ******************
			//*************** Start Api ******************
			{
				title:'API ',
				title_p:'القرآن الكريم',
				dateTarget:'API',
				ul:'https://m21wx.github.io/api-1/'
			},
			{
				title:'API ',
				title_p:'github-api',
				dateTarget:'API',
				ul:'https://m21wx.github.io/github-api-1/'
			},
			//*************** End form *******************
			//*************** Start game *******************
			{
				title:'game ',
				title_p:'لعبة',
				dateTarget:'game',
				ul:'https://m21wx.github.io/projectGame-1/'
			},
			{
				title:'game ',
				title_p:'memory',
				dateTarget:'game',
				ul:'https://m21wx.github.io/-game-3-memory/'
			},
			{
				title:'game ',
				title_p:'Tic-Tac-Toe',
				dateTarget:'game',
				ul:'https://m21wx.github.io/game-4-Tic-Tac/'
			},
			//*************** End game *******************


		
		];


	let asideUl = document.querySelector('.asideUl')
	function localArray(){
	asideUl.innerHTML='';	
		for(let i= 0 ; i < ulArray.length ;i++ ){
			let li;	
			if(lang==='an'){
			li =`<li class='navLi' date-target='${ulArray[i].titleEn}'>${ulArray[i].titleAn} </li>`;
				
			}
			else{
				li =`<li class='navLi'date-target='${ulArray[i].titleEn}'>${ulArray[i].titleEn} </li>`;
				
			}
			
		
	
		asideUl.innerHTML+=li;	
		}
	
	}
 localArray()	




	

		
	let box = document.querySelector('.mainProjectBox');
				//
		function addProject(project){
			box.innerHTML='';
			for(let i = 0; i < project.length ; i++){
				let card =`
					<div class='card' >
						<span class='numberProject'>${i+1} </span>
						<h3 class='titleProject'>${project[i].title } </h3>
						<p class='durectionProject'>${project[i].title_p } </p>
						<a class='ulProject'href='${project[i].ul }'target='_blank'> مشاهده</a>
						<div class='skils'>
							<span> html </span>
							<span> css </span>
							<span> javascript</span>
							
						</div>
					
					</div>
				`;
				box.innerHTML += card;
			}
		}

	addProject(projectPage)
	


	let asideUlLi = document.querySelectorAll('.navLi')



	function removeLi(){
		asideUlLi.forEach(e=>{
			e.classList.remove('activeAsideUl')
		})
	}
	asideUlLi[0].classList.add('activeAsideUl')
		asideUlLi.forEach(e=>{
			e.addEventListener('click',()=>{
				removeLi()
				
				e.classList.add('activeAsideUl');
				let dateTarget= e.getAttribute('date-target')
				if(dateTarget =='all'){
						addProject(projectPage)
				}else{
				let projectPageFilter= projectPage.filter(e=>{
					if(dateTarget === e.dateTarget){
						return  e.dateTarget;
					}
				})
			
				addProject(projectPageFilter)
				}
					
			})
		})
























	
