import React, { useState } from "react";
import GoogleReview, { GoogleReview1 } from "../components/googlereview";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/reviews/reviews.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectCube
} from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, EffectCube]);

const Reviews = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  return (
    <div className="review-container" id="reviews">
      <div className="review-info">
        <h4>Reviews</h4>
        <h3>
          At Soween Hair Salon, we make it our business to give the best
          possible service to our customers. Check out our reviews to see what
          our customers have to say about us! Then come and visit and see for
          yourself!
        </h3>

        <button>
          {" "}
          <a
            href="https://www.google.com/search?hl=en-US&gl=us&q=Soween+Hair+Salon,+466+Nostrand+Ave.,+Brooklyn,+NY+11216&ludocid=15547820761126155072&lsig=AB86z5VOQ4sHvv8IL67p5_TkCvyx&hl=en&gl=US#lrd=0x89c25b7e05dc867b:0xd7c4f49b3a5e3340,1"
            target="_blank"
          >
            Write a Review{" "}
          </a>
        </button>
      </div>
      <div className="review-google">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff"
          }}
          loop={true}
          spaceBetween={0}
          navigation={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          autoplayspeed={600}
          thumbs={{ swiper: thumbsSwiper }}
          effect={"cube"}
          grabCursor={true}
          centeredSlides={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }}
          // pagination={true}
          className="mySwiper1"
        >
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14GgTFzf2l3EwHCYY5gEkZt096fDK0flV-iKaujKoyw=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Chloe F"
              stars={5}
              time="20211020"
              link="https://goo.gl/maps/uXfaf65LvF3uVPvi6"
              review="Got my daughters hair braided here for the first time and highly recommend. The stylist was very professtional and proficiant and her braids were strong, tight and still look freshly done.  You can not beat the price either."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14GgIMZgkbncoRO2zjDMEP7ngj2QdeGJZk-9sQu3jhQQ=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Suzette Lawes"
              stars={5}
              time="20210920"
              review="I have been going to Soween for 4 years. She is the only person I know in NY who can properly do flat twist. My twist are always beautifully done. If you want flat twist Soween is the guru of flat twist."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14GiLxJIG2cHdANqecAEvqeeQXG-NnLQL2pcwBtreTPw=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Katrina Massey"
              link="https://goo.gl/maps/rTmLUZVWFSEkWTqa8"
              stars={5}
              time="20210310"
              review="I absolutely love the renovations. There are friendly and consistently exceptional!
              "
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a/AATXAJyv9XF7rq7GbBSLEdAUy7Mo8eDDShuhqNtwlaqJ=w36-h36-p-rp-mo-br100"
              name="Ericka Ross"
              stars={5}
              time="20201020"
              review="Soween is great.  The quality of work is lovely and Ms. Soween and her team are very sweet.  Great prices. Some places are over charging (prior to COVID) for basic cornrows but Ms. Soween has great prices with hair included.  $45-60 for cornrows depending on length and if they have to wash/ blow out hair.   And they don't braid too tight!!  Keep those edges!! 😁😁😁
              "
              link="https://goo.gl/maps/p6jf2AYTbhLNhwga8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a/AATXAJzGY-FNIdQ0fuBOZxtHk6-KdVodggtA4NBlJ8VR=w36-h36-p-c0x00000000-rp-mo-br100"
              name="Francine Williams"
              stars={4}
              time="20210310"
              review="Salon is very clean and staff does a great job on your hair.
              "
              link="https://goo.gl/maps/UnnxgtxcWwfmxU9A7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a/AATXAJxk1zsQfRzWEgl2Rsx31fk9dLmreduhP-u35lQ6=w36-h36-p-c0x00000000-rp-mo-br100"
              name="Shania Taylor"
              stars={5}
              time="20171005"
              review="I just recently got my hair done this past Friday. I used to go to them a couple years ago before I left for college. I live in jersey now and no one has braided my hair the way they do so I travel to NY to get it done. I saw some new faces and was skeptical about how my hair was going to be but it came out great. I have shaved sides and I got box braids and she did my hair so amazing. I think her name is Marion. Very welcoming place and the owner really cares about her clients. Can't wait till I go back there in a couple months to get it done again. Thanks Marion !!!"
              link="https://goo.gl/maps/tm5dp5JxrfwJFjC56"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14Gg_mImyy08sLo0wxKkS2XuVBRD6NfZ0hSaTwqy0LQk=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="C. Thomas"
              stars={5}
              time="20180510"
              link="https://goo.gl/maps/SvFqRPaQQMMn8mZ96"
              review="Best place in Brooklyn to get your hair braided and weaved....Soween has done shows and celebrities... Affordable, neat and quiet but friendly environment. Call for appointment, you will not be disappointed....First come first serve!!!!!!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14Gg4VZAfUAMtWZEU2p8rzFTO1HL3NMclVT-Wks7WAQ=w36-h36-p-c0x00000000-rp-mo-br100"
              name='Karen "KAYBEE" Blackman'
              stars={5}
              time="20180610"
              link="https://goo.gl/maps/rW6g1z1JzWBctT736"
              review="I've been going to Soween for over 23 years. NEVER Had A Problem. I will be back to post more reviews and Hair Styles. The Owner Is Nice and The Entire Staff..I Love Them All"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a/AATXAJyX3YqJuX3Av2ULGTnWsIenWBNoOS_nEgrIFrVu=w36-h36-p-c0x00000000-rp-mo-ba5-br100"
              name="Denise Durant6"
              stars={5}
              time="20180210"
              review="The best braids, been getting hair done here for year. My braids never hurt and are professional done. It's a bit pricey so come with cash, but worth every dime.
              "
              link="https://goo.gl/maps/Z65eg4vdoZN9Xseq9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a/AATXAJyX4VZ3BNIyxuYg9mG2fBV5rQBZDLWSj17bUFPQdg=w36-h36-p-c0x00000000-rp-mo-br100"
              link="https://goo.gl/maps/6rG8425bpyq9tRLSA"
              name="Debbie Howell"
              stars={5}
              time="20161002"
              review="I have been getting my hair braided by Ngone since the early 90's, they are the best in NY. I travel from NC to get my hair done there. My hair is well taken care of by the staff and it is healthy and grows quickly.
              "
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <GoogleReview
              image="https://lh3.googleusercontent.com/a-/AOh14GiEYKrnCJ6ehOV6lV-pS_qx-tBFUaoIUUALpP94Yw=w36-h36-p-c0x00000000-rp-mo-br100"
              link="https://goo.gl/maps/81pi7ztiChcExnZM6"
              name="diarra samb"
              stars={5}
              time="20211018"
              review="I had my Ponytail done by Soween , and she did a bohemian knotless braids which I kept for A month and half (shown in pictures ), and best believe whenever I go , people asked me where I got my hair done"
            />
          </SwiperSlide> */}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a-/AOh14GgTFzf2l3EwHCYY5gEkZt096fDK0flV-iKaujKoyw=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Chloe F"
              stars={5}
              time="20211020"
              link="https://goo.gl/maps/uXfaf65LvF3uVPvi6"
              review="Got my daughters hair braided here for the first time and highly recommend. The stylist was very professtional and proficiant and her braids were strong, tight and still look freshly done.  You can not beat the price either."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a-/AOh14GgIMZgkbncoRO2zjDMEP7ngj2QdeGJZk-9sQu3jhQQ=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Suzette Lawes"
              stars={5}
              time="20210920"
              review="I have been going to Soween for 4 years. She is the only person I know in NY who can properly do flat twist. My twist are always beautifully done. If you want flat twist Soween is the guru of flat twist."
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a-/AOh14GiLxJIG2cHdANqecAEvqeeQXG-NnLQL2pcwBtreTPw=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="Katrina Massey"
              link="https://goo.gl/maps/rTmLUZVWFSEkWTqa8"
              stars={5}
              time="20210310"
              review="I absolutely love the renovations. There are friendly and consistently exceptional!
              "
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a/AATXAJyv9XF7rq7GbBSLEdAUy7Mo8eDDShuhqNtwlaqJ=w36-h36-p-rp-mo-br100"
              name="Ericka Ross"
              stars={5}
              time="20201020"
              review="Soween is great.  The quality of work is lovely and Ms. Soween and her team are very sweet.  Great prices. Some places are over charging (prior to COVID) for basic cornrows but Ms. Soween has great prices with hair included.  $45-60 for cornrows depending on length and if they have to wash/ blow out hair.   And they don't braid too tight!!  Keep those edges!! 😁😁😁
              "
              link="https://goo.gl/maps/p6jf2AYTbhLNhwga8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a/AATXAJzGY-FNIdQ0fuBOZxtHk6-KdVodggtA4NBlJ8VR=w36-h36-p-c0x00000000-rp-mo-br100"
              name="Francine Williams"
              stars={4}
              time="20210310"
              review="Salon is very clean and staff does a great job on your hair.
              "
              link="https://goo.gl/maps/UnnxgtxcWwfmxU9A7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a/AATXAJxk1zsQfRzWEgl2Rsx31fk9dLmreduhP-u35lQ6=w36-h36-p-c0x00000000-rp-mo-br100"
              name="Shania Taylor"
              stars={5}
              time="20171005"
              review="I just recently got my hair done this past Friday. I used to go to them a couple years ago before I left for college. I live in jersey now and no one has braided my hair the way they do so I travel to NY to get it done. I saw some new faces and was skeptical about how my hair was going to be but it came out great. I have shaved sides and I got box braids and she did my hair so amazing. I think her name is Marion. Very welcoming place and the owner really cares about her clients. Can't wait till I go back there in a couple months to get it done again. Thanks Marion !!!"
              link="https://goo.gl/maps/tm5dp5JxrfwJFjC56"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a-/AOh14Gg_mImyy08sLo0wxKkS2XuVBRD6NfZ0hSaTwqy0LQk=w36-h36-p-c0x00000000-rp-mo-ba4-br100"
              name="C. Thomas"
              stars={5}
              time="20180510"
              link="https://goo.gl/maps/SvFqRPaQQMMn8mZ96"
              review="Best place in Brooklyn to get your hair braided and weaved....Soween has done shows and celebrities... Affordable, neat and quiet but friendly environment. Call for appointment, you will not be disappointed....First come first serve!!!!!!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a-/AOh14Gg4VZAfUAMtWZEU2p8rzFTO1HL3NMclVT-Wks7WAQ=w36-h36-p-c0x00000000-rp-mo-br100"
              name='Karen "KAYBEE" Blackman'
              stars={5}
              time="20180610"
              link="https://goo.gl/maps/rW6g1z1JzWBctT736"
              review="I've been going to Soween for over 23 years. NEVER Had A Problem. I will be back to post more reviews and Hair Styles. The Owner Is Nice and The Entire Staff..I Love Them All"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a/AATXAJyX3YqJuX3Av2ULGTnWsIenWBNoOS_nEgrIFrVu=w36-h36-p-c0x00000000-rp-mo-ba5-br100"
              name="Denise Durant6"
              stars={5}
              time="20180210"
              review="The best braids, been getting hair done here for year. My braids never hurt and are professional done. It's a bit pricey so come with cash, but worth every dime.
              "
              link="https://goo.gl/maps/Z65eg4vdoZN9Xseq9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <GoogleReview1
              image="https://lh3.googleusercontent.com/a/AATXAJyX4VZ3BNIyxuYg9mG2fBV5rQBZDLWSj17bUFPQdg=w36-h36-p-c0x00000000-rp-mo-br100"
              link="https://goo.gl/maps/6rG8425bpyq9tRLSA"
              name="Debbie Howell"
              stars={5}
              time="20161002"
              review="I have been getting my hair braided by Ngone since the early 90's, they are the best in NY. I travel from NC to get my hair done there. My hair is well taken care of by the staff and it is healthy and grows quickly.
              "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
