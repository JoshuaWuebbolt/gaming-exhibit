import React from "react";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Gaming Exhibit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="site">
          <header className="site-header">
            <h1>Gaming Exhibit</h1>
          </header>

          <section
            className="intro-section"
            aria-labelledby="intro-title"
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              padding: '32px',
              margin: '20px 0',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: 12,
              boxShadow: '0 6px 18px rgba(2,6,23,0.6)',
            }}
          >
            <div style={{ flex: '1 1 60%', minWidth: 260 }}>
              <h2 id="intro-title" style={{ margin: 0, fontSize: 28, color: 'var(--accent)' }}>
                Introduction
              </h2>
              <p style={{ marginTop: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                This exhibit has been arranged to delve into the question of what makes a peripheral good. There are many important aspects to a peripheral, the capability, the quality, the immersive value, the feedback, and above all how well games actually use it. In many games a peripheral is necessary to capture the specific actions that are needed, this was the case for Indy 500 and the Atari Racing Controller. For some games the quality of a peripheral is so poor that it cannot do what it sets out to, such as with the Power Glove. Immersion is sometimes the goal of peripheral such as with the DreamCast Fishing Controller used in Sega Bass Fishing. Some games such as Rez use peripherals like the Trance Vibrator to provide vital feedback that assist the player. This exhibit hopes to share with the viewer what design decisions and aspects result in successful and unsuccessful gaming peripherals.
              </p>
              <p style={{ marginTop: 8, color: 'var(--muted)' }}>
                What is important to understand is that even the standard controller is a peripheral. An additional goal of this exhibit is to have viewers view the standard controllers for consoles through the lens of a peripheral and critically analyze why they are designed the way they are and to question what should a standard controller look like?
              </p>
            </div>

            <div style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/intro_image.jpg"
                alt="Intro Image"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Atari Driving Controller</h2>
              <p className="text">
                The Atari Driving Controller is a controller made for the Atari 2600. It has two modes of input. A black dial with full 360 rotation and a red button on the upper left.  The Driving Controller is only supported by one game, its pack in title, Indy 500 [1]. What sets this controller apart from others is its full 360 rotation. While many other controllers have a limit to how far they can be rotated to the left or right, the Driving Controller can be rotated infinitely to the left and infinitely to the right. 
              </p>
            </div>
            <div className="right">
              <Image
              src="/atari_driving_controller.jpg"
              alt="Atari Driving Controller"
              width={1200}
              height={1800}
              style={{ width: '100%', height: 'auto', maxHeight: '420px' }}
              />
            </div>
          </section>

          <section className="section alt">
            <div className="left">
              <h2 className="title">Atari Paddles</h2>
              <Image
                src="/atari_paddles2.jpg"
                alt="Atari Paddles"
                width={1200}
                height={1800}
                style={{ width: '100%', height: 'auto', maxHeight: '420px'}}
              />
            </div>
            <div className="right">
              <p className="text">
                The Atari Paddles is another controller made for the Atari 2600. It is very similar to the Driving Controller but differs in two key ways. First is that it is two controllers in one. The two controllers connect to the Atari 2600 through one connection. The other key difference is that the Paddles have limited rotation. The controller only allows users to rotate the paddle a certain amount to the left and right. You cannot infinitely rotate the paddle in either direction. 
              </p>
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Indy 500 for the Atari 2600</h2>
              <p className="text">
                Indy 500 is a racing game for the Atari 2600. It supports 1 or 2 players with a variety of game modes including Grand Prix Track mode where 2 players race each other, Time Trial where a single player races to see how many laps they can complete in 60 seconds, and Crash n Score, where players compete to “crash” into 50 boxes first. What is core to many of these game modes is driving in a loop around a track. This is where the proper peripheral becomes important. Though the Atari Paddles are very similar to the Atari Racing Controller, the need for full 360 rotation is core to completing a loop. The game would have to be seriously redesigned for it to work with the Atari Paddles. 
              </p>
            </div>
            <div className="right">
              <Image
                src="/indy500_front.jpg"
                alt="Indy 500 Game Case Front"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
              <Image
                src="/indy500_back.jpg"
                alt="Indy 500 Game Case Back"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
            </div>

          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Standard NES Controller</h2>
              <p className="text">
                The standard NES (Nintendo Entertainment System) Controller was used for most games on the console. As such it is designed to be usable for games from varying genres as well as comfortable and useful. It has two red “A” and “B” buttons, two black “SELECT” and “START” buttons and a directional pad (d-pad). The d-pad has four buttons: up, down, left and right. In games such as Final Fantasy [3] or the original The Legend of Zelda [4]. Because of the ease with which a player can change direction and the precision it allows, the d-pad is a part of the NES controller that adds to many of the games on the console. Fighting games such as Double Dragon use the A and B buttons for the standard punch and kick moves [5]. The size of the buttons makes them easy to press and their position close to the player’s thumb when being held make the buttons responsive and easy to press repetitively. Some games such as Cowboy Kid used the start button to pause the game, and it even used the select button to change weapons [6]. Having additional buttons that are less prevalent than the A and B buttons helps for actions that are not as frequently used. Due to its design the NES controller allows for many different games to be played in many different ways.
              </p>
            </div>
            <div className="right">
              <Image 
                src="/NES_controller.jpg" 
                alt="Standard NES Controller" 
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
              <p><a href="https://www.amazon.ca/Nintendo-Nes-Controller-Renewed/dp/B07P9SXPGN">[7]</a></p>
            </div>
          </section>

          <section className="section alt">
            <div className="left">
              <h2 className="title">Power Glove</h2>
              <p className="text">
                The Power Glove is a motion sensing peripheral for the NES with sensors that could detect finger movements as well as more traditional buttons and a d-pad attached. The Power Glove came with an attachment that you would setup around your tv which would detect the movements of the Power Glove. The Power Glove detects when users flex their fingers with the exception of their pinky by using fiber optic tubes. The central gimmick of the Power Glove is of course its motion sensing. Being able to move your hand and fingers and have them be detected. However, the Power Glove could not reliably track its movement which led to poor user experience. Only two games were released specifically with the Power Glove in mind: Super Glove Ball and Bad Street Brawler. Both of these games could be played with a standard NES controller as well [8]. Unfortunately reviews for both of these games say that using the standard NES controller is better or at least equal to using the Power Glove [9] [10]. Its poor build quality and games being better with a standard controller cause the Power Glove to fail to contribute to the games which use it.
              </p>
              <Image 
                src="/powerglove2.jpg" 
                alt="Power Glove" 
                width={800}
                height={1200}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
            <div className="right">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  style={{
                    width: '400px',
                    height: '300px',
                    maxHeight: '900px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(2,6,23,0.6)',
                    border: '1px solid rgba(255, 4, 4, 0.03)',
                    backgroundColor: 'blue',
                  }}
                  loading="lazy"
                  title="Nintendo Powerglove"
                  frameBorder="0"
                  allowFullScreen={true}
                  suppressHydrationWarning
                  allow="autoplay; fullscreen; xr-spatial-tracking; execution-while-out-of-viewport; execution-while-not-rendered; web-share"
                  src="https://sketchfab.com/models/f2b9851d44c047249ad7e504c2826a99/embed?autospin=1&transparent=1&dnt=1"
                />
                <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                  <a
                    href="https://sketchfab.com/3d-models/nintendo-powerglove-f2b9851d44c047249ad7e504c2826a99?utm_medium=embed&utm_campaign=share-popup&utm_content=f2b9851d44c047249ad7e504c2826a99"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                  >
                    Nintendo Powerglove
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://sketchfab.com/tzeshi?utm_medium=embed&utm_campaign=share-popup&utm_content=f2b9851d44c047249ad7e504c2826a99"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                  >
                    tzeshi
                  </a>{' '}
                  on{' '}
                  <a
                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f2b9851d44c047249ad7e504c2826a99"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                  >
                    Sketchfab
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Super Glove Ball</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}></div>
              <Image 
                src="/super_glove_ball_front.jpg" 
                alt="Super Glove Ball Front" 
                width={1200}
                height={800}
                style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
              />
              <Image 
                src="/super_glove_ball_back.jpg" 
                alt="Super Glove Ball Back" 
                width={1200}
                height={800}
                style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
            <div className="right">
              <p className="text">
                Super Glove Ball is a game built specifically to be used with the Power Glove peripheral for the NES. In it the player controls a glove in a 3D space. The player must use the glove to destroy and avoid enemies. The standout feature of this game is that it was built for the Power Glove [8]. The issue with this is that the Power Glove does not improve the gaming experience. In fact, a standard NES controller is easier to use, rather than using the unreliable [8] Power Glove. This of course brings into question the necessity of the Power Glove and the issue of shoehorning a peripheral. Although some games benefit and even require a non-standard peripheral, Super Glove Ball does not. 
              </p>
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Standard DreamCast Controller</h2>
              <p className="text">
                The DreamCast Controller is the standard controller used for most Dreamcast games. It has an analog stick, d-pad, four action buttons, a “START” button and two triggers. It also has two memory card slots. These slots can be used to hold the VMU (Visual Memory Unit), which is a memory card which has a small screen on it as well as a d-pad and four buttons. The VMU is what sets the DreamCast controller apart from many other controllers and allows for unique ways to interact with games. In Sonic Adventure and Sonic Adventure 2 players could take care of Chao. To make this activity more immersive players could load their Chao onto the VMU and take it with them while they were out of the house. This allowed players to stay connected with their game even when away from home. In Power Stone 2 players can collect items within the game. They can then take their VMU and connect it with other players’ VMUs to trade items [10]. This enabled social aspects to games which otherwise would not be practical or possible. The DreamCast controller and specifically the VMU enable games to incorporate elements of game design such as portability and socialization.
              </p>
            </div>
            <div className="right">
              <figure style={{ textAlign: 'center', margin: 0 }}>
              <Image
                src="/dreamcast_controller.jpg"
                alt="Dreamcast Controller"
                width={1200}
                height={800}
                style={{ width: '70%', height: 'auto', maxHeight: '300px' }}
              />
              <figcaption style={{ marginTop: '8px' }}>
                <a href="https://www.dreamcast.nu/en/dreamcast-controller-disassembly-cleaning/">[10]</a>
              </figcaption>
              </figure>

              <figure style={{ textAlign: 'center', margin: 0 }}>
              <Image
                src="/dreamcast_VMU2.jpeg"
                alt="Dreamcast VMU"
                width={1200}
                height={800}
                style={{ width: '120%', height: 'auto', maxHeight: '300px' }}
              />
              <figcaption style={{ marginTop: '8px' }}>
                <a href="https://sonic.fandom.com/f/p/4400000000000220017">[11]</a>
              </figcaption>
              </figure>
            </div>

          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">DreamCast Fishing Rod</h2>
              <p className="text">
                The DreamCast Fishing Controller is a controller built for the Dreamcast. It has 5 buttons, an analog stick, a reel and sensors that detect movement of the rod. This controller is made to replicate a real fishing rod. The two key components to this are the reel and motion detection. The reel helps players mimic the action of reeling a rod. The motion detection allows the controller to know which direction the controller is and if the player flicked their rod. This peripheral can allow for greater immersion within games by taking away some of the abstraction of video games. The controller enables players to do the actual reeling in that they would do with a real fishing rod as well as allows players to move their fishing rod to help with their fishing in ways similar to how moving real fishing rods can help. Overall this peripheral improves the immersion possible for games.
              </p>
            </div>
            <div className="right">
              <Image 
                src="/dreamcast_fishingrod.jpg" 
                alt="DreamCast Fishing Controller" 
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Sega Bass Fishing</h2>
              <p className="text">
                Sega Bass Fishing is a game for the DreamCast that uses the DreamCast Fishing Controller and can also use a standard DreamCast Controller. If a player is using the Fishing Controller, they will use the reel to reel in their hook. It directly mimics real life fishing. Using the standard controller you reel in using the left and right shoulder buttons which unfortunately are far more abstract. When the player has a fish on the hook they sometimes will need to move their fishing rod in a certain direction. Using the fishing controller the player will actually move the fishing rod in the direction that they need to, unlike the standard controller which uses the d-pad to simply have the player click the direction they want. Though players can use both the standard DreamCast Controller and the Fishing Controller the Fishing Controller allows for increased immersion over the standard controller.
              </p>
            </div>
            <div className="right">
              <Image 
                src="/sega_bass_fishing_front.jpg" 
                alt="Sega Bass Fishing Front" 
                width={1200}
                height={800}
                style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
              />
              <Image 
                src="/sega_bass_fishing_back.jpg" 
                alt="Sega Bass Fishing Back" 
                width={1200}
                height={800}
                style={{ width: '50%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
          </section>

          <section className="section">
            <div className="left">
              <h2 className="title">Trance Vibrator</h2>
                <Image 
                src="/trance_vibrator.jpg" 
                alt="Trance Vibrator" 
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '300px' }}
              />
            </div>
            <div className="right">
              <p className="text">
                The Trance Vibrator is a peripheral for the PS2 made specifically for the game Rez. The vibrator has much more powerful vibrations than the standard dualshock2 controller. The vibrator also is not connected to the rest of the controller the way a DualShock 2 is, this allows for a focus to be placed on the vibration. These vibrations allow players to receive high levels of tangible feedback which can inform them of their game. The Trance Vibrator can be placed anywhere and touch any part of the body that a player wishes it to. This allows the player to receive vibrational feedback on their legs, feet and anywhere else. By not just limiting feedback to a player’s hands the possibilities for feedback and immersion are increased. For standard controllers they must limit the vibration else it would interfere with the player’s ability to precisely use their controller, but since the Trance Vibrator does not need to be anywhere near the player’s hands it can have a much more intense vibration. The Trance Vibrator can deliver strong vibrational feedback which can help improve player immersion and give additional feedback.
              </p>
            </div>
          </section>

            <section className="section alt">
            <div className="left">
              <h2 className="title">Sources Cited</h2>
              <ol
              className="text"
              style={{ marginTop: 8, paddingLeft: '1.4em', counterReset: 'li' }}
              >
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Atari Fandom. (n.d.). <a href="https://atari.fandom.com/wiki/Driving_Controller" target="_blank" rel="noopener noreferrer">Driving Controller.</a>Fandom.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                hunterjamesjensen. (2015). <a href="https://sketchfab.com/hunterjamesjensen/collections/power-glove-76398d8f211b4518be983a12958649ed" target="_blank" rel="noopener noreferrer">Power Glove</a> [3D model]. Sketchfab.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Nintendo (1990). <a href="https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NABJE.pdf" target="_blank" rel="noopener noreferrer">Final Fantasy [NES manual]</a>.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Nintendo (1989). <a href="https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAANE.pdf" target="_blank" rel="noopener noreferrer">The Legend of Zelda [NES manual]</a>.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Nintendo (1987). <a href="https://www.digitpress.com/library/manuals/nes/Double%20Dragon.pdf" target="_blank" rel="noopener noreferrer">Double Dragon [NES manual]</a>.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Nintendo (1991). <a href="https://www.thegameisafootarcade.com/wp-content/uploads/2017/02/Cowboy-Kid-Game-Manual.pdf" target="_blank" rel="noopener noreferrer">Cowboy Kid [NES manual]</a>.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Amazon.ca. (n.d.). <a href="https://www.amazon.ca/Nintendo-Nes-Controller-Renewed/dp/B07P9SXPGN" target="_blank" rel="noopener noreferrer">Nintendo NES Controller (Renewed) [Product page]</a>. Amazon.ca.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Centre for Computing History. (n.d.). <a href="https://www.computinghistory.org.uk/det/37392/PAX-Power-Glove-for-Famicom/" target="_blank" rel="noopener noreferrer">PAX Power Glove for Famicom</a>.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                 Roberto Rodriguez (2015). <a href="https://www.retrogamesreview.co.uk/2015/10/super-glove-ball-nes-review.html" target="_blank" rel="noopener noreferrer">Super Glove Ball NES review</a>. Retro Games Review.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Barry. (2011). <a href="https://segabits.com/blog/2011/08/05/the-weekly-five-the-best-vmu-games/" target="_blank" rel="noopener noreferrer">The Weekly Five: The Best VMU Games</a>. Segabits.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Retrodrömmar (2019). <a href="https://www.dreamcast.nu/en/dreamcast-controller-disassembly-cleaning/" target="_blank" rel="noopener noreferrer">Dreamcast controller disassembly &amp; cleaning</a>. Dreamcast.nu.
              </li>
              <li style={{ marginBottom: 8, textIndent: '-1.2em', paddingLeft: '1.2em' }}>
                Sonic Fandom. (2024). <a href="https://sonic.fandom.com/f/p/4400000000000220017" target="_blank" rel="noopener noreferrer">DreamCast VMU (image)</a>. Sonic Fandom.
              </li>
              </ol>
            </div>

            <div className="right" aria-hidden="true" style={{ opacity: 0.9 }}>
              <div style={{ width: 240, textAlign: 'center' }}>
                <small style={{ color: 'var(--muted)' }}>References correspond to bracketed citations used in the exhibit text.</small>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <small>© {new Date().getFullYear()} Joshua Wuebbolt</small>
          </footer>

          <style>{`
            :root {
              --max-width: 1100px;
              --gutter: 24px;
              --bg-1: #0f172a;
              --bg-2: #071029;
              --card: #0b1220;
              --accent: #7dd3fc;
              --muted: #b6c7d8;
            }
            html,body,#root {
              height: 100%;
            }
            body {
              margin: 0;
              font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
              color: #e6eef8;
              background: #f7fdd4ff
            }
            .site {
              max-width: var(--max-width);
              margin: 0 auto;
              padding: 24px;
            }
            .site-header {
              padding: 16px 0;
              text-align: left;
            }
            .site-header h1 {
              margin: 0;
              color: var(--accent);
              font-size: 28px;
              letter-spacing: 0.5px;
            }
            .section {
              display: flex;
              gap: var(--gutter);
              align-items: center;
              padding: 32px;
              margin: 20px 0;
              background: rgba(255,255,255,0.02);
              border-radius: 12px;
              box-shadow: 0 6px 18px rgba(2,6,23,0.6);
              overflow: hidden;
            }
            .section.alt {
              background: rgba(255,255,255,0.01);
            }
            .left {
              flex: 1 1 60%;
              min-width: 260px;
            }
            .right {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .title {
              margin: 0 0 12px 0;
              font-size: 22px;
              color: var(--accent);
            }
            .text {
              margin: 0;
              color: var(--muted);
              line-height: 1.5;
              font-size: 15px;
            }
            .right img {
              width: 100%;
              height: auto;
              max-height: 300px;
              object-fit: cover;
              border-radius: 8px;
              box-shadow: 0 8px 24px rgba(2,6,23,0.6);
              border: 1px solid rgba(255,255,255,0.03);
            }
            .site-footer {
              text-align: center;
              padding: 24px 0 40px;
              color: #93b0c8;
            }

            /* Responsive */
            @media (max-width: 880px) {
              .section {
                flex-direction: column;
                text-align: left;
              }
              .right {
                width: 100%;
                flex: none;
              }
              .right img {
                max-height: 220px;
                width: 100%;
              }
            }
          `}</style>
        </main>
      </body>
    </html>
  );
}