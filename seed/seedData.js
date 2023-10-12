const db = require('../db')
const { Pant, Short, Shirt } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const pant1 = await new Pant ({
        waist_size: "34",
        length_size: "34",
        color: "blue",
        price: "$32",
        Image: 'https://images.meesho.com/images/products/31046218/wi18h_512.webp',
    })
    pant1.save()

    const pant2 = await new Pant ({
        waist_size: "32",
        length_size: "32",
        color: "red",
        price: '$32',
        image: 'https://images.asos-media.com/products/asos-design-parachute-cargo-pants-with-belt-detail-in-techy-fabric-in-red/204158453-1-red?$n_750w$&wid=750&hei=750&fit=crop',
    })
    pant2.save()

    const pant3 = await new Pant ({
        waist_size: "40",
        length_size: "34",
        color: "blue",
        price: '$35',
        image: 'https://images.meesho.com/images/products/31046218/wi18h_512.webp',
    })
    pant3.save()

    const short1 = await new Short ({
        size: "small",
        color: "blue",
        price: '$28',
        image: 'https://m.media-amazon.com/images/I/41WtKjmh7zL._SS400_.jpg',
    })
    short1.save()

    const short2 = await new Short ({
        size: "medium",
        color: "yellow",
        price: '$29',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/39d73e0e-c9b0-4d22-ad70-c9de48713c48/club-woven-flow-shorts-V1vMJX.png',
    })
    short2.save()

    const short3 = await new Short ({
        size: "large",
        color: "red",
        price: "$30",
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e766aa2bf8ef4cabb933a920011690b4_9366/Tastigo_19_Shorts_Red_DP3683_01_laydown.jpg'
    })
    short3.save()

    const shirt1 = await new Shirt ({
        size: "small",
        color: "yellow",
        price: '$25',
        image: 'https://www.bodyboardshop.com.au/cdn/shop/products/academy_tee_yellow_back_1024x1024_2x_bd78142b-0e41-442e-b2be-8ddcb0435627_1200x.jpg?v=1610937314',
    })
    shirt1.save()

    const shirt2 = await new Shirt ({
        size: "medium",
        color: "red",
        price: '$25',
        image: 'https://media.istockphoto.com/id/1354031012/photo/red-t-shirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=_5QLLkUa0-ZzSK1rp6Ie-ZRBPOEku4as4ZMrZg-y2GI=',
    })
    shirt2.save()

    const shirt3 = await new Shirt ({
        size: "large",
        color: "blue",
        price: '$1',
        image: 'https://m.media-amazon.com/images/I/B1EryObaEWS._AC_CLa%7C2140%2C2000%7C51sTg57Y6aL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
    })
    shirt3.save()




}
const run = async () => {
    await main()
    db.close()
  }
  
  run()