import {v4 as uuidv4} from 'uuid';


function chillHop(){
  return [
    {
      name : "thinking of you",
      cover : "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-300x300.jpg",
      artist:"Philanthrope, mommy, Kyle McEvoy",
      audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",
      color:"[#293953, #9BA1F9]",
      id:uuidv4(),
      active:true
    },
    {
      name: "Solar Cove",
      cover: "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",
      artist: 'Mama Aiuto',
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16185",
      color: "[#FAD59F, #FA8E5F]",
      id: uuidv4(),
      active: false
    },
    {
      name: "Dive",
      cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-300x300.jpg",
      artist: "Evil Needle, Venuz Beats",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      color: "[#E7A255, #E6B24F]",
      id: uuidv4(),
      active:false
    }
  ]
}

export default chillHop;