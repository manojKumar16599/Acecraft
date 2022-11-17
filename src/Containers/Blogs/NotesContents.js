import React from 'react';

const NotesContent = () => {
    const key = window.location.pathname.replace('/blog/', '');
    window.scrollTo(0, 0);
    switch (key) {
        case '5-classic-looks-for-her':
            return (
                <div className='top-section'>
                    <div className='info-2'>5 classic looks for her</div>
                    <div className='info-content'>
                        <div>
                            <div>Formal attires undoubtedly bring out the best in women - it’s bold, classy, versatile and above all, makes an unforgettable style</div>
                            <div>statement. However, it’s crucial to always dress according to the occasion - make sure you don't lose the essence of your formal</div>
                            <div>wear when you mix & match your favourite outfits. Here are five classic looks for you:</div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 1</div>
                            <div className='sub-title mt-1'>Formal Pant + Blouse</div>
                            <div>
                                <div>Headed to a casual business meeting or a potential client meet up? Have no idea what to wear? Make it as simple as a classic</div>
                                <div>pants and blouse combination! A pair of cotton or khaki ankle-length pants styled with a semi-formal linen, cotton or chiffon blouse</div>
                                <div>creates the perfect formal look.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 2</div>
                            <div className='sub-title mt-2'>Skirt + Top</div>
                            <div>
                                <div>Got an interview to attend? Or are you flying out of the city for a conference? Tired of sticking to the same crisp white shirt and</div>
                                <div>formal pants combination? Here’s how you can change up your look while striking a balance between your typical formal look and</div>
                                <div>a creative approach - just pair a pencil skirt with a top in a neutral colour palette!</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 3</div>
                            <div className='sub-title mt-2'>Pants/Skirts + Full Sleeve Shirts</div>
                            <div>
                                <div>Wearing the same outfits to work every day can get boring and make your life feel mundane. For a change, you can subtly make</div>
                                <div>the switch to different outfits. The idea is to pair a pant or skirt with full sleeve shirts. Always keep this point in mind - the shirts</div>
                                <div>shouldn’t be in dark colours, but the pants or the skirt can be.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 4</div>
                            <div className='sub-title mt-1'>Blouse + Bow + Skirt</div>
                            <div>
                                <div>If elegance is what you’re aiming for, this outfit does the job excellently! A blouse with a bow gives you a refined look, especially</div>
                                <div>when it’s paired with a skirt. Avoid blouses which have prints or any patterns - plain ones do the trick much better. Also, this is a</div>
                                <div>great look for any business meeting.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 5</div>
                            <div className='sub-title mt-1'>Khaki Suit</div>
                            <div>
                                <div>A khaki suit is an extremely versatile outfit to have in your wardrobe - it gives both a professional and a polished look. It’s essential</div>
                                <div>that any khaki suit should have a matching khaki skirt, and a light coloured contrast shirt.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>The first impression on your potential employer should always be the best one, so it’s imperative to dress in formals when</div>
                                <div>attending formal functions. For the best-customised workwear that’s tailored to perfection, visit Acecraft and have a look at our</div>
                                <div>expansive range!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'acing-your-formal-attire':
            return (
                <div className='top-section'>
                    <div className='info-2'>Acing your formal attire</div>
                    <div className='info-content'>
                        <div className='font-italic'>Formal Wear Essentials For Women</div>
                        <div className='mt-1'>
                            <div>Pulling off a formal attire is not cakewalk - not only do you have to pair clothes that suit you, but you have to make sure that they</div>
                            <div>go with your work style as well. It is necessary to make sure that your wardrobe is equipped with all the basic formal outfit</div>
                            <div>requirements. Given below are the top 5 essentials:</div>
                        </div>
                        <div className='inner-content'>
                            <ul>
                                <li>
                                    <div className='sub-title'>A White Formal Shirt</div>
                                    <div className='mt-1'>
                                        <div>A button-down white formal shirt should be one of the most important items of your work wardrobe. High-collared formal shirts are</div>
                                        <div>perfect for every formal function, both inside and outside of work. It’s highly adaptable - a white formal shirt can be worn inside</div>
                                        <div>your linen jackets, under your business suits or simply paired with formal trousers or skirts. Cotton and linen fabrics are the best for</div>
                                        <div>almost every weather condition.</div>
                                    </div>
                                </li>
                                <li className='mt-3'>
                                    <div className='sub-title'>Khaki Pants Or Chinos</div>
                                    <div className='mt-1'>
                                        <div>You just cannot miss out on the colour brown while setting up your office wardrobe. A pair of khaki pants or chinos is suitable for</div>
                                        <div>all types of weather! These can take you through formal functions, board meetings, office parties and even corporate lunches.</div>
                                        <div>Brown khaki pants or chinos capture the perfect balance of colour as they are not as dark as black, or as light as pastel colours.</div>
                                        <div>They can also be paired with both light and dark coloured tops.</div>
                                    </div>
                                </li>
                                <li className='mt-4'>
                                    <div className='sub-title'>Plain Black Pumps</div>
                                    <div className='mt-1'>
                                        <div>A pair of plain black pump shoes with a small heel or no heel can be your best option for office parties, lunches or even formal</div>
                                        <div>events. They go extremely well with every formal outfit you wear. If you are not a fan of accessories that are plain, you can always</div>
                                        <div>go for ones with small handwork or minimal designs.</div>
                                    </div>
                                </li>
                                <li className='mt-3'>
                                    <div className='sub-title'>Pencil Skirts</div>
                                    <div className='mt-1'>
                                        <div>Pencil skirts are the most versatile pieces of your formal wardrobe. You can pair it with literally everything - a tucked-in formal shirt,</div>
                                        <div>a formal top or even a semi-formal shirt. Pencil skirts go very well with pump shoes or stilettos as well. Petite women can opt for a</div>
                                        <div>fitted, short pencil skirt whereas pear-shaped women can go for slightly longer pencil skirts.</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='sub-title'>A Tote Bag</div>
                                    <div className='mt-1'>
                                        <div>Professional-looking tote bags in a range of formal colours are definitely great add-ons to your formal outfit. Colours such as grey,</div>
                                        <div>brown, red, or black can be the perfect choice to complete your office look. If you’re a person that carries a lot of documents</div>
                                        <div>around or a laptop, a stiff professional tote bag can accommodate all your belongings while adding colour to your formal outfit.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='inner-content mt-4'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>If your wardrobe is equipped with all the basic formal outfit essentials, there can be a minimum of 25 outfit combinations that you</div>
                                <div>can invent with them. If your wardrobe consists of well-fitted clothes, you can walk into any formal event with the utmost</div>
                                <div>confidence. It is important to keep in mind that the way you dress plays a major role in creating an unforgettable first impression!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'selecting-and-styling-your-workwear':
            return (
                <div className='top-section'>
                    <div className='info-2'>Selecting & styling your workwear</div>
                    <div className='info-content'>
                        <div>
                            <div>You’re doing great at your job, but it’s also important to feel stylish and look confident at work. In addition, your workwear should</div>
                            <div>also be comfortable, because what we wear influences our working atmosphere. A uniform style isn’t about repeating or wearing</div>
                            <div>the same thing over and over - it’s about having a signature look and a selection of classic pieces in your wardrobe where you can</div>
                            <div>mix and match anything!</div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Choose The Best</div>
                            <div>
                                <div>Nowadays, many modern workplaces offer their employees a choice when it comes to selecting their workwear. If you have such</div>
                                <div>an option in your workplace, always choose the workwear that works best for you, and the workwear that you feel the most</div>
                                <div>comfortable in. If women prefer to not show their legs, then opting for the pants rather than the skirt works wonders - these tiny</div>
                                <div>choices will monumentally improve how you look and feel at work!</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>You Always Have Control Over Your Look</div>
                            <div>
                                <div>Even if you’re wearing uniform or workwear, you always do have an element of choice to control your look. Your hair, make-up,</div>
                                <div>accessories, and shoes are integral parts of the styling process. Always opt for the latest trending fashion to stay relevant. For</div>
                                <div>women, it’s a great tip to always carry around a scarf and for men, a jacket is a must, just in case you want to add some glam to</div>
                                <div>your office look or change up your appearance respectively.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>What’s Your Workwear Style?</div>
                            <div>
                                <div>Always keep in mind that your style plays a part in your identity as well. What you can do to keep it fresh in the formal look</div>
                                <div>department is to switch things up, keeping the baseline style in place. For example, if you are a person who always prefers button-</div>
                                <div>up shirts and tailored pants, a great tip is to build on to that by adding a blazer or adding accessories which will enhance your</div>
                                <div>look.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>What Fabric Person Are You?</div>
                            <div>
                                <div>Cotton, linen, suede and other materials are the usual fabrics that adorn a formal wardrobe. Cotton is known for giving a crisp and</div>
                                <div>distinguished look. Linen is known for its refined elegance, as well as its reliability and durability. Suede is highly classy as well! It’s</div>
                                <div>great to have a fabric that you prefer the most, but it’s also interesting to change it up from time to time.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>Colour Palette</div>
                            <div>
                                <div>Your uniform style doesn’t necessarily always have to be on the darker tones. Pale greys and pastels are always a good choice!</div>
                                <div>Always create a colour palette for your wardrobe, so you can have a minimalistic set of clothes that can be matched with each</div>
                                <div>other in no time at all.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>The perception, for the longest time, has been centred around the fact that style and workwear are the opposite ends of the</div>
                                <div>spectrum - however, those days are long gone! As long as you choose your formal wardrobe the right way, invest in the right type</div>
                                <div>of clothing, and style your formal wear strategically and smartly, your look will give you the right amount of confidence to do (and</div>
                                <div>look) excellent at work!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case '5-classic-looks-for-him':
            return (
                <div className='top-section'>
                    <div className='info-2'>5 classic looks for him</div>
                    <div className='info-content'>
                        <div>
                            <div>Formal looks on men create the most stylish first impressions. We’ve curated a list of outfits that are simple, easy to put together</div>
                            <div>and above all, guaranteed to look good on any man. So, if you are that person who loves wearing formal outfits because your</div>
                            <div>office requires you to wear them, or if you just like to dress up even when it's not required, you are in for a treat today!</div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 1</div>
                            <div className='sub-title mt-1'>Navy Trousers + White Shirt + Black Dress Shoes</div>
                            <div>
                                <div>This is the perfect look when you are in doubt and have no idea about your formal outfit. Touted as the most classic and</div>
                                <div>outstanding formal combination, this pairing of clothes never goes wrong. The navy blue and white formal combo gives a classy</div>
                                <div>rich feel, which elevates your overall appearance.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>Look 2</div>
                            <div className='sub-title mt-1'>Red & White Checked Shirt + Charcoal Grey Blazer & Trousers + Black Dress Shoes + Blue Tie + Printed Pocket Square</div>
                            <div>
                                <div>An edgier twist on a very formal outfit, the red and white checked shirt adds a sharp aspect to this look and helps you stand out</div>
                                <div>from the rest. What goes great with this outfit are the extras that you can add to enhance it - a tie that matches the blazer, a nice</div>
                                <div>printed pocket square detail to level up your entire look, and black dress shoes with a matching belt are great options to go with.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>Look 3</div>
                            <div className='sub-title mt-1'>Coffee Brown Blazer + Crisp Light Blue Shirt + Coffee Brown Trousers + Brogues/Loafers</div>
                            <div>
                                <div>This is another great example of a timeless brown and light blue combination. The safest outfit out there, it works for any situation</div>
                                <div>and you can never go wrong with it. The colours work in seamless harmony to deliver the quintessential formal look.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <div className='sub-title'>Look 4</div>
                            <div className='sub-title mt-1'>Navy Chinos + White Shirt + Burgandy Brown/Black Shoes</div>
                            <div>
                                <div>Chinos are a great replacement for trousers because they add on to the formal look as well. With this riveting combination, you can</div>
                                <div>turn heads with your suave style. A great tip is to also pair this with a matching navy blazer or a cool grey blazer.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <div className='sub-title'>Look 5</div>
                            <div className='sub-title mt-1'>Beige or Khaki Blazer Jacket + Trousers + Crisp White Shirt + Suede Tassel Loafers</div>
                            <div>
                                <div>If you’re tired of wearing the same old navy & black suits, then this beige colour suit is perfect for you. Great complements to your</div>
                                <div>formal look would be a nice watch, a matching belt and a</div>
                                <div className='mt-1'>pair of tassel loafers to finish this appearance.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>Experimenting with your outfits will definitely give you a better idea about what suits you the best and what you look the most</div>
                                <div>stylish in. Anything goes with anything, but it’s your dressing sense that makes any outfit look great. Choose our products and feel</div>
                                <div>the real sophistication of Acecraft!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'lets-talk-body-types-women-':
            return (
                <div className='top-section'>
                    <div className='info-2'>Let’s talk ‘body types’, women!</div>
                    <div className='info-content'>
                        <div className='mt-1'>
                            <div>It goes without saying that women don’t conform to one body type - they cover a wide spectrum of shapes and sizes. Some of</div>
                            <div>them may be broad and strong, others could be tall and lanky, a few are distinguished as well rounded, and a section of the</div>
                            <div>population may be extremely petite as well. When it comes to dressing, an important point to note is that not every outfit suits</div>
                            <div>every body type - knowing your body type and pairing outfits appropriately is a definite must because the outfit you choose can</div>
                            <div>either flatter your look or be a complete, utter mismatch. Here’s how you can match your body type to the perfect outfit:</div>
                        </div>
                        <div className='inner-content'>
                            <ul>
                                <li>
                                    <div className='sub-title'>The Hour-Glass Figure</div>
                                    <div className='mt-1'>
                                        <div>An hour-glass shaped body is said to be neither skinny nor chubby. This body type is characterised by distinct curves, which is</div>
                                        <div>usually the standout attribute. Straight-cut skirts or formal pants paired with figure-hugging tops are perfect formal wear picks if you</div>
                                        <div>fall under this category. Loose-fitting outfits are generally not suggested, as this style of clothing tends to mask the beauty of this</div>
                                        <div>body type.</div>
                                    </div>
                                </li>
                                <li className='mt-3'>
                                    <div className='sub-title'>Pear-Shaped Figure</div>
                                    <div className='mt-1'>
                                        <div>This physique is said to have a broad frame with wide hips. If you fall under this category, you must be careful in choosing your</div>
                                        <div>outfits - a good point is to avoid materials that stick to your body as well. Deep-round neck tops with formal pants that are not so</div>
                                        <div>figure-hugging is a good choice. Skirts with gathered waistlines are also not advisable for this physique.</div>
                                    </div>
                                </li>
                                <li className='mt-4'>
                                    <div className='sub-title'>Stubby Figure</div>
                                    <div className='mt-1'>
                                        <div>For a streamlined look, a great tip is to choose colours that are darker and match each other well, such as dark and light blues.</div>
                                        <div>Avoid hugely contrasting colours between your bottom and top halves, because this will cause a break-up in your look. Switch to</div>
                                        <div>V-necks instead of crew necks. When it comes to footwear, always go for low contrast colours as they will portray an elongated</div>
                                        <div>impression of your body.</div>
                                    </div>
                                </li>
                                <li className='mt-4'>
                                    <div className='sub-title'>Petite Figure</div>
                                    <div className='mt-1'>
                                        <div>Long dresses that fall loose on your body are usually not recommended for this physique. Your clothes need to be shaped in such</div>
                                        <div>a way that it does not fall loose nor stick to your body. Tops with deep neck usually enhance the shape of your body. Most petite</div>
                                        <div>women look good in tucked-in tops paired with formal skirts. Footwear that covers up for their height is recommended as long as</div>
                                        <div>the person is comfortable wearing it.</div>
                                    </div>
                                </li>
                                <li className='mt-4'>
                                    <div className='sub-title'>A Well Endowed Figure</div>
                                    <div className='mt-1'>
                                        <div>Women with this physique need to pay attention while choosing their outfits. V-necks and scoop cuts are the safest necklines for</div>
                                        <div>people who come under this category. Choosing the right fabric also matters a great deal. Avoid tight-fitting clothes and make sure</div>
                                        <div>that the outfit is tailor-made to fit your body type. Darker colours will also help you carry your outfit well!</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>All body types are beautiful. With the right pairing of suitable clothing, colours and accessories, everyone can enhance their look.</div>
                                <div>Finding outfits that suit you well is one thing, but wearing them the right way is what really matters!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'tips-for-a-great-outfit':
            return (
                <div className='top-section'>
                    <div className='info-2'>Tips for a great outfit</div>
                    <div className='info-content'>
                        <div className='mt-1'>
                            <div>Putting together a great outfit, or in simple words, getting dressed can be the trickiest and the most frustrating part of every</div>
                            <div>dressing-up session. “I don’t have anything to wear!” is a phrase that all of us mutter to ourselves while grooming ourselves for big</div>
                            <div>events in life.  Here are a few tips that will help you conquer the world of fashion:</div>
                        </div>
                        <div className='inner-content mt-4'>
                            <span className='sub-title'>Shop For Clothes That Suit You</span>
                            <div className='mt-4'>
                                <div>When you are shopping for your outfits, make sure that you are conscious of how every colour and style will look on you. When it</div>
                                <div>comes to looking good, it's not your size or shape that matters, it's the fit of your clothes. Wearing the right clothes is not about</div>
                                <div>going with what's trending, it is about choosing what suits you and what makes you feel comfortable and confident.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-4'>
                            <span className='sub-title'>Always Go For The Right Sizes</span>
                            <div>
                                <div>Make sure you don’t look like you have worn somebody else’s clothes and not your own. The truth is, finding an outfit that’s</div>
                                <div>practically made for you is all about embracing your body type and celebrating your favourite features. Picking your perfect look is</div>
                                <div>easier if you are aware of your body type and what kind of clothing suits you.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Stick To The Basics While Dressing Up</span>
                            <div>
                                <div>If you are dressing your lower body in a bold garment, it is better to play down the rest of your outfit with a light coloured shirt or</div>
                                <div>top. Mixing the right colours might seem difficult in the beginning, but once you crack the formula, there is nothing like it that will</div>
                                <div>help you pull off a great looking outfit.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Choose The Right Shoes</span>
                            <div>
                                <div>The shoes you choose should complement your overall look. If your outfit is formal, make sure you go for a formal pair of shoes,</div>
                                <div>which usually have small heels or are flats. Sneakers, casual shoes, floaters and the entire range of sporty shoes will help you pull</div>
                                <div>off a semi-formal or a casual look.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Your Hairdo Will Talk For Your Outfit</span>
                            <div>
                                <div>A well-kempt hairdo will make you look professional at any time in the day. It will make people think that you have a  specific</div>
                                <div>purpose in doing what you are doing. The effort that you put into your hair will also reflect back on your outfit, thus making you</div>
                                <div>look sharp and confident in front of the world.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>Every great outfit requires a certain amount of effort that needs to be put in. It is important to keep in mind that your appearance</div>
                                <div>speaks for you. There is no point in being a mastermind if you are unable to put together a neat looking outfit for yourself. The way</div>
                                <div>you dress reflects your character in many ways. However, at the end of the day, it is also important to keep in mind that you should</div>
                                <div>dress to impress yourself first, and then, take on the world!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'dressing-to-succeed-the-importance-of-formals':
            return (
                <div className='top-section'>
                    <div className='info-2'>Dressing to succeed: the importance of ‘formals’</div>
                    <div className='info-content'>
                        <div>
                            <div>A workplace is one of the few spaces where one has to create and maintain a professional version of his/her identity all the time,</div>
                            <div>and the formal outfits that you wear will help in establishing the same. While creative agencies may allow their employees to dress</div>
                            <div>freely or casually, corporate sectors do not prefer this practice. Here’s why:</div>
                        </div>
                        <div className='inner-content mt-2'>
                            <span className='sub-title'>Maintaining A Professional Image</span>
                            <div className='mt-1'>
                                <div>Corporate companies encourage a defined dress code to maintain a professional image of the company as employees routinely</div>
                                <div>interact with potential leads or prospects, clients and business partners. The major reason why formal wear is important for every</div>
                                <div>business employee is because it puts forward an appealing image and conveys the idea that the company has set professional</div>
                                <div>style standards.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Unexpected Meetings</span>
                            <div className='mt-1'>
                                <div>Imagine having to attend an urgent meeting at your client’s office dressed in casuals, and discussing a potential deal with them.  In</div>
                                <div>the corporate world, you’ll never know when you will be required to meet someone from outside your company. Your image in</div>
                                <div>front of any client should reflect the image of your company, and when it comes to business dealings, this image needs to be</div>
                                <div>professional at all times. Your presentation will either help you secure a new contract or lose the opportunity to make any such</div>
                                <div>deals in the future.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Making The First Impression</span>
                            <div className='mt-1'>
                                <div>First impressions are everything, and we only get one chance to make a positive one in front of the people who are important with</div>
                                <div>respect to our career. Formal wear helps ease the tension of making that all-important first impression by perfecting your</div>
                                <div>professional approach. Associates in the business world tend to take your views more seriously when you are dressed in formal</div>
                                <div>attire and are polished in every sense of the word.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Healthy Culture At Workplace</span>
                            <div className='mt-1'>
                                <div>Sometimes, individuals tend to lose interest in their work if they are not formally dressed. It is very easy to get distracted by long</div>
                                <div>dangling earrings, fancy clothing and shoes that stand out. In the corporate industry, the formal way of dressing helps in putting up</div>
                                <div>a simple, neat and crisp front and eliminates any potential distractions as well.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>The formal dress code is extremely important in the corporate industry as it brings discipline to an individual’s life and inculcates a</div>
                                <div>sense of team spirit among employees. Dressing up in formals need not be a boring task - once you realize the power it has in</div>
                                <div>reflecting your personality and your views, you will definitely opt for formal outfits while attending all your work-related events!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'workwear-for-all-seasons-the-women-edit':
            return (
                <div className='top-section'>
                    <div className='info-2'>Workwear for all seasons: the women edit</div>
                    <div className='info-content'>
                        <div>
                            <div>Predicting seasonal changes is one of the most challenging aspects, but one of the best advantages of experiencing different</div>
                            <div>seasons is that we get a chance to work our winter, summer or autumn wardrobes! Even though the weather is always likely to be</div>
                            <div>changing, Acecraft helps you find the right workwear for the right season in no time at all.</div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Our Range</span>
                            <div className='mt-1'>
                                <div>Our workwear collection is an expansive one - our range of outfits come in a wide variety of materials, textures, shades, designs,</div>
                                <div>sizes and colours, suited for every season out there.</div>
                                <div className='mt-1'>Apart from seasonal wear, our products include customised workwear, designer uniforms, etc.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>What Works For Winter</span>
                            <div className='mt-1'>
                                <div>The weather could be ready to freeze us, but that shouldn’t affect what we wear.</div>
                                <ul className='mt-1'>
                                    <li>A tailored suit is winter workwear at its best. A rich, jewel-toned plaid takes it up a notch as well!</li>
                                    <li>
                                        <div>A skirt suit makes for a fresh take on the classic pantsuit look. Make it work for a cold day by layering some stockings</div>
                                        <div>underneath and adding boots.</div>
                                    </li>
                                    <li>
                                        <div>Style a menswear-inspired blazer and trousers with a pair of sleek stiletto boots for the perfect masculine-meets-feminine</div>
                                        <div>contrast.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Hints For The Hot Weather</span>
                            <div className='mt-1'>
                                <div>
                                    <div>Getting dressed during the hottest days of the year is hard, but with this guide, you can look cool even during the year’s most</div>
                                    <div>scorching season!</div>
                                </div>
                                <ul className='mt-1'>
                                    <li>
                                        <div>Rethink classic looks - pair a dressy white T-shirt with your formal pants, and slip on some patterned mules for a</div>
                                        <div>contemporary spin on workwear.</div>
                                    </li>
                                    <li>
                                        <div>Even your denim can be HR-approved, with the right styling. Consider a printed blazer to add a tailored accent to a more</div>
                                        <div>casual look.</div>
                                    </li>
                                    <li>
                                        <div>Black and white looks great at work. Appropriate doesn't need to be boring, though: an immaculately ironed white shirt with</div>
                                        <div>Chloe-styled track pants is also chic.</div>
                                    </li>
                                    <li>
                                        <div>A crisp cotton shirtdress is a must for summer. Whether you wear it with flats, sandals, or pumps, the classic tailoring keeps it</div>
                                        <div>feeling work appropriate.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Autumn Is Here</span>
                            <div className='mt-1'>
                                <div>
                                    <div>This autumn, don't shy away from suits - just because the weather is cooler, doesn't mean you can't wear your usual rotation of</div>
                                    <div>skirts.</div>
                                </div>
                                <ul className='mt-1'>
                                    <li>
                                        <div>Cover with a coat for particularly cold days. The suit can also straddle the mid-line with a simple shirt or tee for the warmer</div>
                                        <div>days.</div>
                                    </li>
                                    <li>Embrace blazers or cardigans if you’re feeling cold in a summer dress for an autumn outing.</li>
                                    <li>When it comes to autumn, start with a well-fitting trouser and layer blouses, blazers, tees and even dresses on top.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Rainy Days</span>
                            <div className='mt-1'>
                                <div>Don’t let the rain let you down. Follow these tips:</div>
                                <ul className='mt-1'>
                                    <li>
                                        <div>Go classic with an all-white look, topped with a classic trench. On drizzling days, opt for loafers that won’t be ruined by a few</div>
                                        <div>drops of rain.</div>
                                    </li>
                                    <li>
                                        <div>Pair a little black dress with knee-high boots. Top it off with a coat that covers most of your outfit to protect it from the</div>
                                        <div>elements.</div>
                                    </li>
                                    <li>
                                        <div>With a skirt-and-blouse look, keep warm by adding a pair of tights to your outfit. For work, slip into a pair of chunky heel</div>
                                        <div>boots that are both rain and office-friendly.</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>Most of these examples of formal and semi-formal workwear are resistant to extreme elements, namely rain, wind, cold and heat.</div>
                                <div>By successfully battling these, a professional can thrive more readily in their environment. At Acecraft, we analyse what our</div>
                                <div>customers require, and provide them with suitable workwear that is as user-friendly and convenient as possible. Browse and</div>
                                <div>discover our versatile range today!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'the-acecraft-difference':
            return (
                <div className='top-section'>
                    <div className='info-2'>The acecraft difference</div>
                    <div className='info-content'>
                        <div>
                            <div>Looking crisp and fashionable isn’t always about wearing expensive shoes and extraordinary outfits. It depends on the overall</div>
                            <div>attitude of the person wearing the outfit as well. Your attitude comes from your confidence, and your confidence comes from your</div>
                            <div>dressing style. If you are confident about what you are wearing, there is one less thing to worry about while going for your</div>
                            <div>favourite event!</div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Appearance Translates To Performance</span>
                            <div className='mt-1'>
                                <div>In most cases, people connect your appearance with your performance. If you dress appropriately, it displays the interest you have</div>
                                <div>in what you are doing and how much effort you are willing to put in. The vision of our brand is to help people leverage this aspect</div>
                                <div>of clothing to their maximum advantage. The formal and semi-formal designs that we offer, will add to an unparalleled appearance</div>
                                <div>and will eventually, translate to your performance.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Perfect Balance Between Formal And Casual</span>
                            <div className='mt-1'>
                                <div>In a world where people are starting to lean more towards casual wear for formal functions, it can be tricky to understand the rules</div>
                                <div>of appearance. This is why, at Acecraft, we have come up with unique designer uniforms that look semi-formal yet are highly</div>
                                <div>suitable for universities. Our designs suit almost everyone and are the perfect blend of formal/casual, and our aim is to give the</div>
                                <div>customer exactly what they expect from the brand and more!</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Add-Ons Are Not Just Add-Ons</span>
                            <div className='mt-1'>
                                <div>During interviews, recruiters usually scan candidates from head to toe to analyze their appearance. A well-polished pair of shoes,</div>
                                <div>with neat looking socks, will add colour to your outfit. A wrist-watch that goes with your shirt will make you look more professional</div>
                                <div>and this, in turn, can help you impress your recruiter. We keep in mind, the importance of every aspect of one’s outfit, even the</div>
                                <div>accessories. Our outfits are designed in such a way that the clothing does not overshadow the accessories, yet makes a unique</div>
                                <div>style statement on its own.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Choice Of Colours</span>
                            <div className='mt-1'>
                                <div>Be it the designer wear uniforms or formal shirts, our brand always chooses colours that can be paired with almost all the basic</div>
                                <div>colours. It is important to pair your shirts with the right shade of pants or skirts. To be on the safer side, it is always good to pair</div>
                                <div>contrast colours that go well with your skin tone.</div>
                            </div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>We pay attention to every minute detail of your appearance. We thrive to make the finishing of our outfits exemplary and come up</div>
                                <div>with designs that will suit every physique. Acecraft is made exclusively for the most prestigious organizations across the world and</div>
                                <div>for those who believe that the clothing you wear is an extension of themselves!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'corporate-to-cupcakes-story-of-a-superwoman-':
            return (
                <div className='top-section'>
                    <div className='info-2'>Corporate to cupcakes! – story of a superwoman.</div>
                    <div className='info-content'>
                        <div>
                            <div>Seema Punjabi, a former corporate professional, embarked on the journey of turning her love for baking into a full-fledged</div>
                            <div>inspirational brand. Sugar Fairy stands testament to Seema's pursuit of her passion and innovation in her field.</div>
                        </div>
                        <div className='mt-1'>
                            <div>Having worked in a corporate set up since 2012, Seema indulged in her joy of baking and desserts by training under a leading</div>
                            <div>home baker in Bangalore in the year 2015. The year was eventful, and in due course Seema set up Sugar Fairy, with personalized,</div>
                            <div>home baked pastries being her forte. When she first began, she was encouraged by those around her and the constructive</div>
                            <div>feedback and brilliant reviews only has served to further drive her bake more! Seema relates that the first ever order that kick</div>
                            <div>started her career was placed by her boss.</div>
                        </div>
                        <div className='mt-1'>
                            <div>Seema is drawn to her field by an undying and fervent appreciation for desserts. Being an ardent foodie, she understands the role</div>
                            <div>her creation plays in any event. Seema says that every effort put in is paid off when she sees the smiles as people dig in to her</div>
                            <div>food!</div>
                        </div>
                        <div className='mt-1'>
                            <div>Her journey since then has not always been a bed of soft fondant rolls, but one that has been challenging, exciting and full of</div>
                            <div>surprises.  There was once, reminisces Seema, when she baked 1000 cupcakes for one of Titan Skinn’s success parties and</div>
                            <div>although it was challenging, Seema with the help of a fellow baker who had a bigger unit baked continuously for two whole days.</div>
                            <div>Seema narrates a few highlights down the road such as the time she baked a 22kg “Ferrari” themed cake, the biggest one she's</div>
                            <div>baked thus far!</div>
                        </div>
                        <div className='mt-1'>
                            <div>Her customers go beyond the expected range of little kids to suited up corporate professionals, for Seema was even called on to</div>
                            <div>cater to a lovely Indie, furry-pawed friend as she just turned one with a pet friendly cake. More recently Seema was awarded the</div>
                            <div>title “Best Home Baker” from a celebrated restaurant in the city.</div>
                        </div>
                        <div className='mt-1'>
                            <div>Seema’s work is driven by innovation, constantly improving with constructive criticism from those most important to her: her clients.</div>
                            <div>Seema relates the story of how she once got a very bad review from one of her clients on the aspects of packaging and also</div>
                            <div>because she got the name wrong. This put into perspective the significance of detail in her work and she now is so much more</div>
                            <div>meticulous, making sure to have everything perfectly in place.</div>
                        </div>
                        <div className='mt-1'>
                            <div>Seema believes that in the field of entrepreneurship, personal style is very important as it gives you confidence and earns respect.</div>
                            <div>Her preferred style would be a comfortable formal dress and jacket. She also trusts that comfort and look come hand in hand</div>
                            <div>unlike many who trust only in the appearance. Well, you can’t go wrong with that, when your style icon is Kareena Kapoor.</div>
                        </div>
                        <div className='mt-1'>
                            <div>While trying to get to know Seema outside her professional realm we learned that her favourite book is “The secret by Rhonda</div>
                            <div>Byrne” and also that like many of us, she fangirls Salman Khan and watches all his movies earnestly. She admires the famous</div>
                            <div>Mumbai Pastry Chef Pooja Dhingra, who’s work consistently inspired her.</div>
                        </div>
                        <div className='mt-1'>Seema’s story has so much in common with her best-loved quote:</div>
                        <div className='mt-1'>“When you want something, all the universe conspires to help you achieve it” – Paulo Coelho</div>
                        <div className='mt-1'>
                            <div>We don’t really have to wear an armour and fight the bad guys to be a superwoman. While many women still swither with</div>
                            <div>contemplation, a few decide to go out there and make their dreams come true. And there it is, The superwoman in us.</div>
                        </div>
                    </div>
                </div>
            )
        case 'how-to-complete-your-college-look':
            return (
                <div className='top-section'>
                    <div className='info-2'>How to complete your college look</div>
                    <div className='info-content'>
                        <div className='inner-content'>
                            <span className='sub-title'>Blazers</span>
                            <div className='mt-1'>
                                <div>A crucial must-have garment to complete the professional look, blazers don’t just enhance your outfit - they make you look and</div>
                                <div>feel the part during any formal event. When it comes to men, classic colours like black, grey, tan and royal blue accentuate their</div>
                                <div>dressing style, while women tend to pick shades that suit their shirts. Blazers also look great on women when they are paired with</div>
                                <div>a formal skirt.</div>
                                <div className='mt-1'>Handy Tip: Avoid blazers when there’s extensive travelling in the picture, though. Your sweat glands will thank you.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Polo T-Shirts</span>
                            <div className='mt-1'>
                                <div>A T-shirt is great for a laid-back, casual look, but a polo T-shirt is perfect for all the other kinds of occasions. Not only do they fit the</div>
                                <div>physique well, but the collar also makes it automatically look dressier. If you are heading for an office party or a semi-formal</div>
                                <div>gathering, you can avoid the formal workplace shirts and opt for polos instead. From warm to cool, polos come in a plethora of</div>
                                <div>colours but choose yours only once you’ve got the vibe of your event down.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Jeans/Formal Pants</span>
                            <div className='mt-1'>
                                <div>From faded jeans to dark denims, low waist or mid waist, skinny or straight fit, the options are endless and so are the colours! The</div>
                                <div>great bit about jeans is that it is one of the most versatile pieces of clothing, due to its ability to complement an effortless casual</div>
                                <div>look as well as a semi-formal one. They can be matched with a polo T-shirt for any guy’s casual day out, or with a silk top and</div>
                                <div>suede blazer combination when it comes to women.</div>
                                <div className='mt-1'>So when it comes to choosing the right pair, keep the occasion in mind.</div>
                                <div className='mt-1'>
                                    <div>If the event is strictly formal, professional pants, pantsuits or trousers should be your go-to wardrobe. Choose a colour that blends</div>
                                    <div>with your shirt, tie, blazer, and you’re good to go!</div>
                                </div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Sweatshirts</span>
                            <div className='mt-1'>
                                <div>The perfect lazy day outfit, a sweatshirt is usually the highlight in every casual outing, be it game day or if you’re hitting the gym.</div>
                                <div>It’s usually a staple among college goers as well. But draw the line right there. Wearing these baggy creations to a meeting or a</div>
                                <div>presentation is a big no-no.</div>
                                <div className='mt-1'>It’s great for Netflix and Chill, though. </div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Shoes</span>
                            <div className='mt-1'>
                                <div>Sneakers, in addition to being super comfortable, can be paired with literally any outfit. Not to mention, the socks that accompany</div>
                                <div>them! Patterns, cut, fit, colours...nothing adds more flair to your feet than a pair of quirky socks. On the other hand, sandals, heels</div>
                                <div>and wedges are also fashion favourites for women but double as appropriate formal footwear when paired with the right kind of</div>
                                <div>outfits. When it comes to men, loafers or oxfords work great with any attire and bring out a polished, professional look.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Bags</span>
                            <div className='mt-1'>
                                <div>Ever seen a college student without one of these? We haven’t either!</div>
                                <div className='mt-1'>Easy to carry, classy yet fashionable, funky tote bags are every college woman’s go-to accessory. However, it is ideal to switch it up</div>
                                <div>with blacks, browns,  pastels or corresponding muted shades when pairing it with a formal attire. Men usually prefer messenger</div>
                                <div>bags, satchels, or commuter bags that can enhance their professional look.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Neckties</span>
                            <div className='mt-1'>
                                <div>An important addition to your professional attire, a necktie is the one element that rounds off your formal look. Ranging across a</div>
                                <div>series of colours and sizes, neckties can be paired with formal attires in a variety of interesting ways. Thin neckties of late have</div>
                                <div>been climbing up the trend charts, and are a popular item in the present-day student wardrobe..</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Belts</span>
                            <div className='mt-1'>
                                <div>Belts are quite easily one of the most vital accessories. A good belt can take your outfit a long way, and almost always, it’s a good</div>
                                <div>idea to stick to the classics - the blacks, browns and tans.</div>
                                <div className='mt-1'>Fun fact: Burgandy is steadily climbing the trend ranks as well.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Watches</span>
                            <div className='mt-1'>
                                <div>Strap colour, wrist size, dial size, dial colour, occasion...watch out for all of these factors when you’re adding the finishing touches</div>
                                <div>to your formal look. Another great tip, is to take into consideration the typology of the watch - minimal, bulky, muted or bling, it’s all</div>
                                <div>about what works for you (and your outfit)!</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Glares</span>
                            <div className='mt-1'>
                                <div>Last but not least, glares are a must. Not only do these protect you from the harsh sunlight, but they also make for a great add-on.</div>
                                <div>Class in the mornings? Check. Heading to the beach? Check. There’s a variety of glares that you can choose from, and a great tip</div>
                                <div>is to always keep your facial structure in mind before opting for one.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'dress-the-right-way-to-impress-the-right-way':
            return (
                <div className='top-section'>
                    <div className='info-2'>Dress the right way to impress the right way</div>
                    <div className='info-content'>
                        <div>
                            <div>Ask a person who failed to make it through an interview because of his dress code, and you will realize how important it is to</div>
                            <div>choose the appropriate outfit for a particular event. It goes without saying that the art of dressing right is an essential one to master</div>
                            <div>because, at the end of the day, first impressions definitely go a long way.</div>
                        </div>
                        <div className='inner-content mt-1'>
                            <span className='sub-title'>The ‘What Do I Wear’ Question</span>
                            <div className='mt-1'>
                                <div>Most of the time, your decision will be an obvious one. If the event is a formal one, professional outfits will have to be chosen.</div>
                                <div>Similarly, you don’t show up for an informal party in a formal three-piece suit. Nailing the vibe of your event is key. If you are</div>
                                <div>planning to go to a football match that is happening in your college, a casual tee with track pants and sneakers checks all the right</div>
                                <div>boxes. If there’s an official meeting or job interview on your schedule, a formal shirt, pants/skirts and shoes would be the perfect</div>
                                <div>business attire. However, the best way to find out what you need to wear for an event if you have a doubt is to confirm it with the</div>
                                <div>organizing committee or the event managers. Better safe than sorry, ay?</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Exploring Your Options</span>
                            <div className='mt-1'>
                                <div>When it comes to formal events, you’ll need to find that middle ground between looking sharp and exuding style. The good news</div>
                                <div>is, it’s easy to nail both looks in one! Designer uniforms, for example, strike the exact balance between professional suits and</div>
                                <div>casuals. They are comfortable, formal-looking uniforms that look presentable and polished as well as suit your personal style!</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Final Take</span>
                            <div className='mt-1'>
                                <div>Here’s a quick rundown of what you can wear for what:</div>
                                <div className='mt-1'><span className='font-italic'>Smart casuals</span> are for office parties, happy hour meetings and business luncheons. These include dress pants, loafers, pencil skirts</div>
                                <div>and button-down tops.</div>
                                <div className='mt-1'><span className='font-italic'>Dressy casuals</span> are for church visits and formal dinners. These include silk pants, dress pants, skirts, trousers, leather loafers and</div>
                                <div>dress shirts.</div>
                                <div className='mt-1'><span className='font-italic'>Business casuals</span> are for company parties and business lunch meetings. These include khakis, long sleeve tops, sweaters, casual</div>
                                <div>dresses and polo shirts.</div>
                                <div className='mt-1'><span className='font-italic'>Business formals</span> are for job interviews and formal business meetings. These include formal pants, formal shirts, formal shoes,</div>
                                <div>neckties, blazers, coats, formal skirts and heels.</div>
                            </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>The Colour Code</span>
                            <div className='mt-1'>
                                <div>Blacks, whites, greys, and pastel coloured outfits are the predominant colours found in the formal world, while casual events go</div>
                                <div>well with light, bright and sometimes, funky colours.</div>
                            </div>
                            <div className='mt-4'>
                                <div>Pairing the right outfit with the right event is as important as preparing for the event itself. You need to look clean and sharp for a</div>
                                <div>meeting, hep and trendy for the mall and, cosy and comfy while you’re indoors. A point to keep in mind is that the way you dress</div>
                                <div>will be the way you will be addressed.  Once you know the difference, it’s hard to not dress the right way!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'styling-accessories-that-complement-your-formal-wear':
        default:
            return (
                <div className='top-section'>
                    <div className='info-1'>Nov 16, 2019</div>
                    <div className='info-2'>Styling accessories that complement your formal wear</div>
                    <div className='info-content'>
                        <div>
                            <div>Formal wear only serves as the base - it’s the accessories you adorn that perfect the quintessential formal look. However, styling</div>
                            <div>plays a massive role in the same. It should ideally have a little bit of everything to make your formal look a truly distinctive one.</div>
                            <div>Here are a few tips on how you can style your formal wear: </div>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Accessories For Men - Tips: </span>
                            <ul>
                                <li>
                                    <div><span className='sub-title'>Pocket Squares</span> - <span>These are a great, suave addition to your formal look. It’s not always necessary that your pocket square</span></div>
                                    <div>should match your formal wear - it just shouldn't clash with it drastically.</div>
                                </li>
                                <li>
                                    <span className='sub-title'>Cufflinks</span> - <span>Cufflinks add a touch of class to your suit. Adding cufflinks to your shirt will keep it firm and in place as well.</span>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Watches</span> - <span>Your watch should be just as dressy as the suit your wear. Watches made from stainless steel are a great</span></div>
                                    <div>complement to your meeting look.</div>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Tie Clip</span> - <span>The best way to complete your formal look (and also keep your tie in place) is to go for a simple tie clip. It also</span></div>
                                    <div>works to keep your tie neat and wrinkle-free throughout the day!</div>
                                </li>
                                <li>
                                    <span className='sub-title'>Belt</span> - <span>Leather belts are always a popular choice. An essential tip is to always match your belt with your formal shoes.</span>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Footwear</span> - <span>Footwear is arguably one of the most important pieces of clothing in an outfit for men. Always opt for leather or</span></div>
                                    <div>suede as it rounds off your formal look with a refined touch.</div>
                                </li>
                            </ul>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Accessories For Women - Tips: </span>
                            <ul>
                                <li>
                                    <div><span className='sub-title'>Scarves</span> - <span>If you’re feeling chilly or if the weather allows for it, it’s always good to wear a professional-looking scarf with a suit.</span></div>
                                    <div>Just keep in mind that the scarves you choose should be accessory ones, and not winter scarves.</div>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Belt</span> - <span>A thin belt accentuates any woman’s figure, so it’s essential for you to choose a slim one that is in a contrast colour</span></div>
                                    <div>from your outfit. The belt and shoe rule that is a must for men doesn’t usually apply for women, though.</div>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Jewellery</span> - <span>If you’re heading for any formal event, avoid wearing large costume jewellery. Earrings should be conservative</span></div>
                                    <div>and small. Necklaces are acceptable, as long as they are delicate or are pendants. An elegant watch is a must</div>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Purse/Handbag</span> - <span>Always opt for a classy leather bag that can fit all your essentials like your laptop. This adds a touch of</span></div>
                                    <div>professionalism to your look.</div>
                                </li>
                                <li>
                                    <div><span className='sub-title'>Hosiery</span> - <span>If you’re wearing hosiery, it should always suit your skin tone, and should not have any distracting patterns or</span></div>
                                    <div>designs.</div>
                                </li>
                            </ul>
                        </div>
                        <div className='inner-content'>
                            <span className='sub-title'>Conclusion</span>
                            <div className='mt-1'>
                                <div>For both men and women, getting your accessories right is an integral part of nailing the formal look. However, unless the base is</div>
                                <div>right, the impact you create won’t be an effective one - start by finding customised workwear that complements your frame to a tee</div>
                                <div>at Acecraft!</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default NotesContent;