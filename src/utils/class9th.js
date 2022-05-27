 import biology from '../Assests/class9th/biology.jpg'
 import Chemistry from '../Assests/class9th/chemistry.jpg'
 import Physics from '../Assests/class9th/physics.jpg'
 import computer from '../Assests/class9th/computer.PNG'
 import math from '../Assests/class9th/math.jpg'
 import urdu from '../Assests/class9th/urdu.jpg'
 import islamiat from '../Assests/class9th/islamiat.jpg'
 import ps from '../Assests/class9th/ps.jpg'
 import english from '../Assests/class9th/English.png'
 import {FcBiohazard,FcCalculator,FcScatterPlot,FcIdea,FcMultipleDevices,FcDocument,FcFactoryBreakdown,FcBbc,FcSoundRecordingCopyright} from 'react-icons/fc'

 
const NineClass = [
    {
        id: '1',
        name: "Biology",
        author:'Dr.Salman',
        edition:'2017-2018',
        downloads:'35,566',
        image: biology,
        icon:<FcBiohazard/>,
        book: "https://drive.google.com/file/d/1baKxnpDrF0TPulHklCzMCn8OXkxUdM65/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1IrzM3A7SlKPcbx6SRrpEOhcP_3wFDUYC/view?usp=sharing",
      
    },
    {
        id:'2',
        name: "Chemistry",
        author:'Dr.Jaleel Tariq',
        edition:'2017-2018',
        downloads:'35,566',
        image: Chemistry,
        icon:<FcScatterPlot/>,
        book: "https://drive.google.com/file/d/1hMJjO3XftG2vTiKxrdEUIzMudDF09FDK/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1N-6a5-gT3HLomje62GVI3Pn0YzObx9gZ/view?usp=sharing",
       
    },
    {
        id:'3',
        name: "Computer Science",
        author:'Dr.Muhammad Atif Chattha',
        edition:'2019-2020',
        downloads:'35,566',
        image: computer,
        icon:<FcMultipleDevices/>,
        book: "https://drive.google.com/file/d/1cd7D_OCodyJ7B2Q01TxXoFpQdP3mErFU/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1mWswzpOVsBD91S2_PNhp44X24YFqlwI9/view?usp=sharing",
    
    },
    {
        id:'4',
        name: "English",
        author:'Rohi Zaka Malik',
        edition:'2019-2020',
        downloads:'35,566',
        image: english,
        icon:<FcBbc/>,
     
        book: "https://drive.google.com/file/d/1lJjZPjoZ4ASvnuk9IVqtBksR9J52qMPI/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/14iM-7Q6GNi-3MN2ViVMHIQ6iW3cwXcZ7/view?usp=sharing",
        
    },
    {
        id:'5',
        name: "Islamiat",
        author:'Shiekh Saeed Akhtar',
        edition:'2019-2020',
        downloads:'35,566',
        image: islamiat,
        icon:<FcFactoryBreakdown/>,
        book: "https://drive.google.com/file/d/1VuGdu0HIURPd1h7X7-B6AGZoUYB9tXSE/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/10ZuCdPpi377Wgd1Kk9A_KkzYxIw-Ny1c/view?usp=sharing",
    },
    {
        id:'6',
        name: "Mathematics",
        author:'M.D Phillips',
        edition:'2019-2020',
        downloads:'35,566',
        image: math,
        icon:<FcCalculator/>,

        book: "https://drive.google.com/file/d/1oARhNcgTGyLGDDlfijVPb7rTQ7CrYxrI/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1BJpWYgyTICIzhV4I_a_sKjXSBWJ_7QOc/view?usp=sharing",
        
    },
    {
        id:'7',
        name: "Pak Studies",
        author:'Chudhary Ghulam Rasool',
        edition:'2019-2020',
        downloads:'35,566',
        image: ps,
        icon:<FcSoundRecordingCopyright/>,
        book: "https://drive.google.com/file/d/1CNORwvQZk7hZlBIDIeIlVWtCtQ693BFn/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1XYzCP8c9UGFk81mURASDZlqo80JAVqC2/view?usp=sharing",
        
    },
    {
        id:'8',
        name: "Physics",
        author:'Irshad Ahmad Chattha',
        edition:'2019-2020',
        downloads:'35,566',
        image: Physics,
        icon:<FcIdea/>,
        book: "https://drive.google.com/file/d/1_sjUNXY5TGV7y2tel4lsvh2NtqlZhDE5/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/12BNjq51BitxwM0NlWChYFvSRUefKU5Rn/view?usp=sharing",
        
    },
    {
        id:'9',
        name: "Urdu",
        author:'Chudhary Ghulam Rasool',
        edition:'2016-2017',
        downloads:'35,566',
        image: urdu,
        icon:<FcDocument/>,
        book: "https://drive.google.com/file/d/1yt9F4JNH1tS7fQdGYkDJjhrc7w9hblRs/view?usp=sharing",
        keybook: "https://drive.google.com/file/d/1r-8MmdofbyEn6Y6Cm7ZfNHGlx47FLWjJ/view?usp=sharing",
    
    },    
];

export default NineClass;