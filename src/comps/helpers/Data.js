
let navbar_items = [
	{
		name: 'Home',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'Doctors',
		icon: 'fas fa-tv',
		link: 'doctors'
	},
	{
		name: 'Blogs',
		icon: 'fas fa-blog',
		link: 'blogs'
	},
	{
		name: 'Contact',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbar_accounts = [
	{
		link: 'https://www.facebook.com/',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://twitter.com/',
		icon: 'fab fa-twitter'
	}
]

let doctors = [
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 1' ,
		title : 'Dr. Natalia Ch',
		oldp  : '7999 Rs' ,
		newp  : '6500 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 2',
		title : 'Dr. Qasim',
		oldp  : '9000 Rs' ,
		newp  : '8500 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 3',
		title : 'Dr. Hussain',
		oldp  : '10000 Rs' ,
		newp  : '9500 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 4',
		title : 'Dr. Khakan',
		oldp  : '9500 Rs' ,
		newp  : '8500 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 5',
		title : 'Dr. Idrees',
		oldp  : '7999 Rs' ,
		newp  : '6500 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 6',
		title : 'Dr. Ali',
		oldp  : '9000 Rs' ,
		newp  : '8000 Rs'
	},
	{
		img   : require('../../images/pics/products/docF.png'),
		alt   : 'product 7',
		title : 'Dr. Nabeela',
		oldp  : '7500 Rs' ,
		newp  : '7000 Rs'
	}
]

let top_blogs = [
	{
		img: require('../../images/pics/blogs/1.jpg'),
		alt: 'blog 1'
	},
	{
		img: require('../../images/pics/blogs/2.jpg'),
		alt: 'blog 2'
	},
	{
		img: require('../../images/pics/blogs/3.jpg'),
		alt: 'blog 3'
	},
	{
		img: require('../../images/pics/blogs/5.jpg'),
		alt: 'blog 4'
	},
	{
		img: require('../../images/pics/blogs/4.jpg'),
		alt: 'blog 5'
	}
]

let recent_blogs = [
	{
		img: require('../../images/pics/blogs/6.jpg'),
		alt: 'blog 6',
		mar: 'mb-3'
	},
	{
		img: require('../../images/pics/blogs/7.jpg'),
		alt: 'blog 7',
		mar: ''
	}
]

let faq_items = [
	{
		id_one: 'headingOne',
		data_bs_target: '#collapseOne',
		aria_controls: 'collapseOne',
		id_two: 'collapseOne',
		aria_labelledby: 'headingOne',
		title: 'Question 1 here',
		show: true
	},
	{
		id_one: 'headingTwo',
		data_bs_target: '#collapseTwo',
		aria_controls: 'collapseTwo',
		id_two: 'collapseTwo',
		aria_labelledby: 'headingTwo',
		title: 'Question 2 here',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseThree',
		aria_controls: 'collapseThree',
		id_two: 'collapseThree',
		aria_labelledby: 'headingThree',
		title: 'Question 3 here',
		show: false
	}
]

let contact = [
	{
		type: 'e-mail',
		info: 'support@petx.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '+93-301-1234567',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: 'PUCIT, OC, Near Anarkali Bazar, The Mall, Lahore',
		icon: 'fas fa-map-marker-alt'
	}
]

let MetaObjects = [
	{
		For: 'LandingPage',
		title: 'PETx - Home',
		description: 'Welcome to PETx, the ultimate webApp for all pet lovers! Our home page serves as an introduction to our app, showcasing the various features and services that we offer, including about, contact us, doctors, and blog pages. With our user-friendly interface, you can easily navigate through our website and learn more about our passion for pets. What sets us apart is our SOS service, providing you with the peace of mind knowing that help is just a click away in case of any emergency. Trust us to keep your furry friends happy and healthy with our reliable and efficient services. Join the PETx community today!',
		keywords: 'PETx, home page, about, contact us, doctors, blog page, SOS service, pet, webApp, veterinary, animal care, emergency services, online platform, appointment scheduling, pet health.',
	},
	{
		For: 'Blogs',
		title: 'PETx - Social',
		description: 'Welcome to PETx, the ultimate webApp for all pet lovers! Our home page serves as an introduction to our app, showcasing the various features and services that we offer, including about, contact us, doctors, and blog pages. With our user-friendly interface, you can easily navigate through our website and learn more about our passion for pets. What sets us apart is our SOS service, providing you with the peace of mind knowing that help is just a click away in case of any emergency. Trust us to keep your furry friends happy and healthy with our reliable and efficient services. Join the PETx community today!',
		keywords: 'PETx, home page, about, contact us, doctors, blog page, SOS service, pet, webApp, veterinary, animal care, emergency services, online platform, appointment scheduling, pet health.',
	},
	{
		For: 'ContactUs',
		title: 'PETx - Contact',
		description: 'Welcome to PETx, the ultimate webApp for all pet lovers! Our home page serves as an introduction to our app, showcasing the various features and services that we offer, including about, contact us, doctors, and blog pages. With our user-friendly interface, you can easily navigate through our website and learn more about our passion for pets. What sets us apart is our SOS service, providing you with the peace of mind knowing that help is just a click away in case of any emergency. Trust us to keep your furry friends happy and healthy with our reliable and efficient services. Join the PETx community today!',
		keywords: 'PETx, home page, about, contact us, doctors, blog page, SOS service, pet, webApp, veterinary, animal care, emergency services, online platform, appointment scheduling, pet health.',
	},
	{
		For: 'Doctors',
		title: 'PETx - Doctors',
		description: 'Welcome to PETx, the ultimate webApp for all pet lovers! Our home page serves as an introduction to our app, showcasing the various features and services that we offer, including about, contact us, doctors, and blog pages. With our user-friendly interface, you can easily navigate through our website and learn more about our passion for pets. What sets us apart is our SOS service, providing you with the peace of mind knowing that help is just a click away in case of any emergency. Trust us to keep your furry friends happy and healthy with our reliable and efficient services. Join the PETx community today!',
		keywords: 'PETx, home page, about, contact us, doctors, blog page, SOS service, pet, webApp, veterinary, animal care, emergency services, online platform, appointment scheduling, pet health.',
	}
]

export
{
	navbar_items,
	navbar_accounts,
	doctors,
	top_blogs,
	recent_blogs,
	faq_items,
	contact,
	MetaObjects
}