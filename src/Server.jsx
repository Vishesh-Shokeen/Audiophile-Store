import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,
        models: {
            products: Model,
        },
        seeds(server) {
            server.create('product', {
                name: "XX59 HEADPHONES",
                
                price: 899,
                type: 'headphones',
                desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move..',
                features: {
                    desc: `More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
                    inbox: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']
                },
                desktop_preview_image: "/Audiophile-Store/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
                tablet_preview_image:  "/Audiophile-Store/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg" ,
                mobile_preview_image:  "/Audiophile-Store/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx59-headphones/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-xx59-headphones/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-xx59-headphones/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-xx59-headphones/mobile/image-product.jpg'
            });

            server.create('product', {
                name: "YX1 EARPHONES",
            
                type: 'earphones',
                price: 599,
                desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
                features: {
                    desc: `The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
                    inbox: ['Earphone Unit', 'Multi-size Earplugs', 'User Manual', 'USB-C Charging Cable', 'Travel Pouch']
                },
                desktop_preview_image: '/Audiophile-Store/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
                tablet_preview_image:  '/Audiophile-Store/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
                mobile_preview_image:  '/Audiophile-Store/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-yx1-earphones/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-yx1-earphones/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-yx1-earphones/mobile/image-product.jpg'
            });

            server.create('product', {
                name: "ZX7 SPEAKERS",
            
                type: 'speakers',
                price:  3500 ,
                desc: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
                features: {
                    desc: `The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
                    inbox: ['Speaker Unit', 'Speaker Cloth Panel', 'User Manual', '3.5mm 5m Audio Cable', '7.5m Optical Cable']
                },
                desktop_preview_image: '/Audiophile-Store/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
                tablet_preview_image:  '/Audiophile-Store/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
                mobile_preview_image:  '/Audiophile-Store/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-zx7-speaker/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx7-speaker/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-zx7-speaker/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-zx7-speaker/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-zx7-speaker/mobile/image-product.jpg'
            });

            server.create('product', {
                name: "ZX9 SPEAKERS",

                type: 'speakers',
                price: 4500,
                desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
                features: {
                    desc: `Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
                    inbox: ['Speaker Unit', 'Speaker Cloth Panel', 'User Manual', '3.5mm 5m Audio Cable', '10m Optical Cable']
                },
                desktop_preview_image: '/Audiophile-Store/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
                tablet_preview_image:  '/Audiophile-Store/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
                mobile_preview_image:  '/Audiophile-Store/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-zx9-speaker/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-zx9-speaker/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-zx9-speaker/mobile/image-product.jpg'
            });

            server.create('product', {
                price: 1750,
                name: "XX99 MARK I HEADPHONES",

                type: 'headphones',
                desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go..',
                features: {
                    desc: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
                    inbox: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable']
                },
                desktop_preview_image: '/Audiophile-Store/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
                tablet_preview_image:  '/Audiophile-Store/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
                mobile_preview_image:  '/Audiophile-Store/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
            });

            server.create('product', {
                price: 2999,
                name: "XX99 MARK II HEADPHONES",

                type: 'headphones',
                desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                features: {
                    desc: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat`,
                    inbox: ['Headphone Unit', 'Replacement Earcups', 'User Manual', '3.5mm 5m Audio Cable', 'Travel bag']
                },
                desktop_preview_image: '/Audiophile-Store/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
                tablet_preview_image:  '/Audiophile-Store/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
                mobile_preview_image:  '/Audiophile-Store/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
                desktop_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
                ],
                tablet_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
                ],
                mobile_image_gallery: [
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
                    '/Audiophile-Store/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
                ],
                desktop_product_image: '/Audiophile-Store/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
                tablet_product_image:  '/Audiophile-Store/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
                mobile_product_image:  '/Audiophile-Store/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
            });
        },


        routes() {
            this.namespace = 'api';
            this.get('/products', (schema, request) => {
                return schema.products.all();
            });
        },
    });
    return server;
}
