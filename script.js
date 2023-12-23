<!DOCTYPE html>
<html lang="en">
<head>
  <title>Biologi Naufal Elyzar</title>
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/180/180700.png" type="image/x-icon">
</head>
<body>
  <header>
    <a href="" class="logo">Naufal Elyzar</a>
    <ul>
      <li><a href="https://Bulan.nopale.repl.co" class="active">Home</a></li>
      <li><a href="https://i.postimg.cc/L5whMMf8/CV.png">About Me</a></li>
      <li><a href="https://web.nopale.repl.co/">Work</a></li>
      <li><a href="https://wa.me/+6281346425154">Contact</a></li>
    </ul>
  </header>
  <section>
    <img src="stars.png" id="stars">
    <img src="moon.png" id="moon">
    <img src="mountains_behind.png" id="mountains_behind">
    <h2 id="text">Bulan</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="mountains_front.png" id="mountains_front">
  </section>
  <div class="sec" id="sec">
    <h2>Bagaimana Bulan Mempengaruhi Tumbuh-tumbuhan</h2>
    <p>Bulan telah lama diketahui memiliki pengaruh pada berbagai aspek kehidupan di bumi, termasuk pada tumbuh-tumbuhan. Fase bulan, pengaruh gravitasi, dan cahaya bulan dapat memengaruhi pertumbuhan, produksi, dan siklus hidup tumbuhan. Berikut adalah penjelasan lebih detail mengenai hal tersebut.</p>
  </div>
  <div class="sec2" id="sec">
    <h2>Apa yang dimaksud dengan pengaruh bulan terhadap tumbuhan?</h2>
    <p>Bulan dapat mempengaruhi pertumbuhan, produksi, dan siklus hidup tumbuhan. Pengaruh bulan tersebut terjadi melalui tiga faktor utama, yaitu fase bulan, pengaruh gravitasi, dan cahaya bulan.</p>
  </div>
  <div class="sec2" id="sec">
    <h2>Pengaruh Gravitasi Bulan pada Tumbuh-tumbuhan</h2>
    <p>Bulan juga memiliki pengaruh gravitasi pada tumbuh-tumbuhan, meskipun efeknya tidak sebesar pengaruh gravitasi Bumi. Selama fase bulan purnama, gravitasi bulan akan menarik air dan nutrisi ke permukaan tanah, sehingga membuat tanaman lebih mudah menyerapnya. Selain itu, bulan purnama juga dapat mempengaruhi produksi getah pada tanaman tertentu, seperti karet dan maple. Pada fase ini, getah diklaim lebih banyak mengalir dan lebih berkualitas. Namun, tidak semua tumbuhan bereaksi positif pada gravitasi bulan. Beberapa jenis tanaman seperti tanaman kacang-kacangan dapat tumbuh lebih baik pada saat gravitasi bulan yang rendah.</p>
  </div>
<div class="sec2" id="sec">
  <h2>Pengaruh Cahaya Bulan pada Tanaman</h2>
  <p>Cahaya bulan juga dapat mempengaruhi tumbuh-tumbuhan. Tanaman yang tumbuh di tempat yang gelap atau minim cahaya, seperti di bawah pohon, dapat tumbuh lebih baik selama fase bulan purnama karena cahaya yang dipantulkan oleh bulan dapat membantu fotosintesis. Namun, pada tanaman yang tumbuh di tempat yang terang, cahaya bulan justru dapat mengganggu siklus tidur mereka, sehingga mengurangi produksi buah dan biji.</p>
  <div class="image-container">
    <img src="https://p0.pxfuel.com/preview/937/463/706/landscape-nature-moon-full-moon.jpg" alt="gambar" class="curved-image aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" >
  </div>
</div>
</br>
            <div class="youtube-video" data-aos="fade-right" data-aos-duration="500">
                <iframe width="560" height="415"  src="https://www.youtube.com/embed/24jNbjjrpr8" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            </div>
            </br>
<footer>
  <div class="footer-icons">
    <a href="https://www.instagram.com/val_elzar/" target="_blank">
      <img src="IG.png" alt="Instagram Icon" />
    </a>
    <a href="https://open.spotify.com/user/31ka2gyolp6xm6i6everinxdyx7u" target="_blank">
      <img src="11661570388xlqve2emckykh8duxvsgpvh7twc500yxmhrxeqceos5tlsy69cafnjapavvuls7qozpoi4rz8u97zecjlqnva0yy38a7xxuxbu2r.png" alt="Spotify Icon" />
    </a>
    <a href="mailto:naufal111el@gmail.com" target="_blank">
      <img src="email-logo-png-27.png" alt="Email Icon" />
    </a>
  </div>
</footer>





  

  <script>
    let stars = document.getElementById('stars')
    let moon = document.getElementById('moon')
    let mountains_behind = document.getElementById('mountains_behind')
    let text = document.getElementById('text')
    let btn = document.getElementById('btn')
    let mountains_front = document.getElementById('mountains_front')
    let header = document.querySelector('header')

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      stars.style.left = value * 0.25 + 'px'
      moon.style.top = value * 1.05 + 'px'
      mountains_behind.style.top = value * 0.5 + 'px'
      mountains_front.style.top = value * 0 + 'px'
      text.style.marginRight = value * 4 + 'px'
      text.style.marginTop = value * 1.5 + 'px'
      btn.style.marginTop = value * 1.5 + 'px'
      header.style.top = value * 0.5 + 'px'
    })
  </script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init();
</script>
</body>
</html>