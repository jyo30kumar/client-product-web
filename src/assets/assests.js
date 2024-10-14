// import product images
import blue_bottle from './product-images/bottle/blue-steel-bottle.jpg';
import glass_bottle from './product-images/bottle/glass-bottle.jpg'
import gym_bottle from './product-images/bottle/gym-bottle.jpg'
import water_bottle  from './product-images/bottle/water-bottle.jpg'
import water_bottle01 from './product-images/bottle/water-bottle01.jpg'
import white_steel_bottle from './product-images/bottle/white-steel-bottle.jpg'
import white_steel_bottle01 from './product-images/bottle/white-steel-bottle01.jpg'
import camera_glass from './product-images/electronic/camera-glass.jpg'
import disk from './product-images/electronic/disk.jpg'
import laptop from './product-images/electronic/laptop.jpg'
import medium_camera from './product-images/electronic/medium-camera.jpg'
import small_camera from './product-images/electronic/small-camera.jpg'
import color_pencil from './product-images/pencil/color-pencil.jpg'
import green_pencil from './product-images/pencil/green-pencil.jpg'
import red_pencil from './product-images/pencil/red-pencil.jpg'
import black_dial_watch from './product-images/watch/black-dial-watch.jpg'
import black_watch from './product-images/watch/black-watch.jpg'
import brown_watch from './product-images/watch/brown-watch.jpg'
import digital_watch from './product-images/watch/digital-watch.jpg'
import kid_watch from './product-images/watch/kid-watch.jpg'
import rubber_watch from './product-images/watch/rubber-watch.jpg'
import small_watch from './product-images/watch/small-watch.jpg'
import stainless_watch from './product-images/watch/stainless-watch.jpg'
import white_watch from './product-images/watch/white-watch.jpg'
import zed_black_watch from './product-images/watch/zed-black-watch.jpg'

// import collection images
import collection_bottle from '../assets/collection-images/bottle.jpg'
import collection_electronic from '../assets/collection-images/electronic.jpg'
import collection_pencil from '../assets/collection-images/pencil.jpg'
import collection_watch from '../assets/collection-images/watch.jpg'

export const placeholderSrc = "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
      <rect width='100%' height='100%' fill='url(#grad)'/>
      <defs>
        <linearGradient id='grad' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' style='stop-color:rgb(255,255,255);stop-opacity:1' />
          <stop offset='60%' style='stop-color:rgb(240,240,240);stop-opacity:1' /> <!-- Very Light Gray -->
          <stop offset='100%' style='stop-color:rgb(255,255,255);stop-opacity:1' />
        </linearGradient>
      </defs>
    </svg>
    `);

export const collection = [
    {
        id:1,
        name:"Bottle",
        image:collection_bottle,
    },
    {
        id:2,
        name:"Electronic",
        image:collection_electronic,
    },
    {
        id:3,
        name:"Pencil",
        image:collection_pencil,
    },
    {
        id:4,
        name:"Watch",
        image:collection_watch,
    }
];

export const productItems  = [
    {
        id:1,
        name:"Blue Steel Bottle",
        image:blue_bottle,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:1,
    },
    {
        id:2,
        name:"Glass Bottle",
        image:glass_bottle,
        quantity:1,
        unit:"pcs",
        price:200,
        categId:1,
    },
    {
        id:3,
        name:"Gym Bottle",
        image:gym_bottle,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:1,
    },
    {
        id:4,
        name:"Water Bottle",
        image:water_bottle,
        quantity:1,
        unit:"pcs",
        price:150,
        categId:1,
    },
    {
        id:5,
        name:"Water Bottle",
        image:water_bottle01,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:1,
    },
    {
        id:6,
        name:"White Steel Bottle",
        image:white_steel_bottle,
        quantity:1,
        unit:"pcs",
        price:300,
        categId:1,
    },
    {
        id:7,
        name:"White Steel Bottle",
        image:white_steel_bottle01,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:1,
    },
    {
        id:8,
        name:"Camera Glass",
        image:camera_glass,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:2,
    },
    {
        id:9,
        name:"Disk",
        image:disk,
        quantity:1,
        unit:"pcs",
        price:200,
        categId:2,
    },
    {
        id:10,
        name:"Laptop",
        image:laptop,
        quantity:1,
        unit:"pcs",
        price:200,
        categId:2,
    },
    {
        id:11,
        name:"Medium Size Camera",
        image:medium_camera,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:2,
    },
    {
        id:12,
        name:"Small Size Camera",
        image:small_camera,
        quantity:1,
        unit:"pcs",
        price:100,
        categId:2,
    },
    {
        id:13,
        name:"Color Pencil",
        image:color_pencil,
        quantity:1,
        unit:"pcs",
        price:10,
        categId:3,
    },
    {
        id:14,
        name:"Green Pencil",
        image:green_pencil,
        quantity:1,
        unit:"pcs",
        price:10,
        categId:3,
    },
    {
        id:15,
        name:"Red Pencil",
        image:red_pencil,
        price:20,
        quantity:1,
        unit:"pcs",
        categId:3,
    },
    {
        id:16,
        name:"Black Dial Watch",
        image:black_dial_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:17,
        name:"Black Watch",
        image:black_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:18,
        name:"Brown Watch",
        image:brown_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:19,
        name:"Digital Watch",
        image:digital_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:20,
        name:"Kid Watch",
        image:kid_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:21,
        name:"Rubber Watch",
        image:rubber_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:22,
        name:"Small Watch",
        image:small_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:23,
        name:"Stainless Watch",
        image:stainless_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:24,
        name:"White Watch",
        image:white_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    },
    {
        id:25,
        name:"Zed Black Watch",
        image:zed_black_watch,
        quantity:1,
        unit:"pcs",
        price:500,
        categId:4,
    }
]