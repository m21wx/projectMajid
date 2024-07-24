
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
				title:'Exercises-1',
				title_p:' hover Link',
				dateTarget:'Exercises',
				ul:'https://m21wx.github.io/exercises-1/'
			},
			{
				title:'شريط التمرير',
				title_p:'click ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/progectSlider-1/'
			},
			{
				title:'slider Img-2',
				title_p:'click ',
				dateTarget:'slider',
				ul:'https://m21wx.github.io/slider-2/'
			},
			

		
		];
	//********************

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
























	
