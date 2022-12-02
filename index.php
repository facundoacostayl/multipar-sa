<?php

if($_POST) {
  $name = "";
  $empresa = "";
  $telefono = "";
  $email = "";
  $mensaje = "";

  
$ip = $_SERVER['REMOTE_ADDR'];
$captcha = $_POST['g-recaptcha-response'];
$secretkey = "6Ld3pTwjAAAAAAQR0amDrWAwRG745f72UcpJjNR5";

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&
response=$captcha&remoteip=$ip");

$attributes = json_decode($response, TRUE);

$errors = array();

if($attributes['success']) {
    $errors[] = "Verificar captcha";
}
  
  if(isset($_POST['name'])) {
    $name = filter_var($_POST['name'], FILTER_UNSAFE_RAW);
  }
  
  if(isset($_POST['empresa'])) {
    $empresa = filter_var($_POST['empresa'], FILTER_UNSAFE_RAW);
  }

  if(isset($_POST['email'])) {
    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
  }
  
  if(isset($_POST['mensaje'])) {
    $mensaje = htmlspecialchars($_POST['mensaje']);
  }

  $recipient = "facundoacostayl@gmail.com";

  $headers  = 'MIME-Version: 1.0' . "\r\n"
  .'Content-type: text/html; charset=utf-8' . "\r\n"
  .'From: ' . $email . "\r\n";

  if(mail($recipient, "Multipar Web", $mensaje, $headers)) {
    echo "<p>Gracias por contactarnos, $visitor_name. Obtendrás una respuesta en las próximas horas.</p>";
} else {
    echo '<p>Ocurrió un error. Intenta nuevamente o contáctanos a través de nuestros otros medios de comunicación.</p>';
}
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Multipar S.A.</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/normalize.css" />
    <link rel="stylesheet" href="https://use.typekit.net/rco5sgx.css" />
    <link rel="stylesheet" href="./css/utils.css" />
    <link rel="stylesheet" href="./css/effects.css" />
    <script
      src="https://kit.fontawesome.com/b95ba2cf7a.js"
      crossorigin="anonymous"
    ></script>
    <script defer src="./main.js"></script>
    <script defer src="https://code.jquery.com/jquery-3.6.1.js"></script>
    <script defer src="./jquery.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <div class="container">
      <header id="header-section">
        <div class="section">
          <nav class="">
            <div class="content">
              <a href="#header-section"
                ><img src="./img/Logo-Multipar-Top.svg" alt="logo-multipar-sa"
              /></a>
              <div class="nav-right">
                <div class="nav-info">
                  <p>inforio@riopar.com</p>
                  <p>(+54 11) 4331.9111</p>
                </div>
                <img
                  class="menu-icon"
                  src="./img/icons/hamburger-icon.png"
                  alt="bars"
                />
              </div>
            </div>
            <div class="cursor">
              <p class="cursor-text">Multipar Río Paraná</p>
              <p class="cursor-special-text">Detalles del servicio</p>
            </div>
          </nav>
          <div class="hero">
            <div class="hero-menu">
              <div class="menu-container">
                <ul>
                  <li class="menu-li"><a href="#">Inicio</a></li>
                  <li class="menu-li">
                    <a href="#about-section">Quienes Somos</a>
                  </li>
                  <li class="menu-li">
                    <a href="#servicios-section">Servicios</a>
                  </li>
                  <li class="menu-li">
                    <a href="#interes-section">Herramientas</a>
                  </li>
                  <li class="menu-li">
                    <a href="#contacto-section">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cursor"></div>

            <div class="hero-all-content reveal">
              <div class="hero-content">
                <div class="hero-title">
                  <h1>Multipar</h1>
                  <div class="hero-subtitle">
                    <h2>Río Paraná</h2>
                  </div>
                </div>
              </div>

              <div id="hero-arrow" class="hero-arrow">
                <a href="#about-section"
                  ><img src="./img/icons/arrow-down-red.png" alt="arrow"
                /></a>
              </div>
              <div class="cursor"></div>
            </div>
          </div>
        </div>
      </header>

      <div class="section hidden-section">
        <div id="about-section" class="about-section">
          <div class="bubble-effect-images">
            <img
              class="faro-image"
              src="./img/iconos-bubble/faro-multipar.svg"
              alt="faro"
            />
            <img
              class="brujula-image"
              src="./img/iconos-bubble/brujula-multipar.svg"
              alt="brujula"
            />
            <img
              class="marinero-image"
              src="./img/iconos-bubble/marinero-multipar.svg"
              alt="marinero"
            />
            <img
              class="elice-image"
              src="./img/iconos-bubble/elice-multipar.svg"
              alt="elice"
            />
            <img
              class="ancla-image"
              src="./img/iconos-bubble/ancla-multipar.svg"
              alt="ancla"
            />
          </div>
          <div class="about-content reveal">
            <h4>
              Multipar S.A., parte del grupo RIOPAR®, que comenzó sus
              actividades en febrero de 1992, fue la primer Empresa privada
              especializada en la prestación de servicios de pilotaje en el Río
              Paraná. Desde esa fecha ha cubierto los requerimientos de sus
              clientes ininterrumpidamente, las veinticuatro horas del día,
              todos los días del año, por
              <span>profesionales calificados</span>.
            </h4>

            <div class="about-aside-text">
              <p>Especialistas en</p>
              <p>Pilotaje y Practicaje<br />Río Paraná</p>
            </div>
          </div>
          <div class="hero-arrow">
            <a href="#servicios-section"
              ><img src="./img//icons/arrow-down-white.png" alt="arrow-down-white"
            /></a>
          </div>
        </div>
        <div class="cursor"></div>
      </div>

      <div class="hidden-section">
        <div id="servicios-section" class="servicios-section">
          <div class="servicios-content">
            <div class="servicios-list">
              <div class="row-1">
                <div class="servicio-group zoom">
                  <h1 class="servicios-title">Servicios</h1>

                  <img
                    onmouseover="changeCursorText()"
                    src="./img/servicios/practicaje.jpg"
                    alt="practicaje"
                    class="servicio-img"
                    onmouseleave="getBackCursorText()"
                    id="practicaje"
                  />

                  <div class="overlay">
                    <div class="content overlay-button">
                      <p id="practicaje-button">Practicaje</p>
                    </div>
                  </div>

                  <div class="servicio-info">
                    <h4>PRACTICAJE</h4>
                    <p>Río Paraná</p>
                  </div>
                </div>
                <div class="servicio-group zoom">
                  <img
                    src="./img/servicios/asesoramiento.jpg"
                    alt="translados"
                    class="servicio-img"
                    onmouseover="changeCursorText()"
                    onmouseleave="getBackCursorText()"
                    id="translados"
                  />

                  <div class="overlay">
                    <div class="content overlay-button">
                      <p id="translados-button">Translados</p>
                    </div>
                  </div>

                  <div class="servicio-info">
                    <h4>TRANSLADOS</h4>
                    <p>Acuáticos y terrestres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cursor"></div>
      </div>

      <div class="hidden-section">
        <div id="servicios-section" class="servicios-section servicios-section-2">
          <div class="servicios-content">
            <div class="servicios-list">
              <div class="row-2">
                <div class="servicio-group zoom">
                  <img
                    src="./img/servicios/asesoramiento.jpg"
                    alt="asesoramiento"
                    class="servicio-img"
                    onmouseover="changeCursorText()"
                    onmouseleave="getBackCursorText()"
                    id="asesoramiento"
                  />
                  <div class="overlay">
                    <div class="content overlay-button">
                      <p id="asesoramiento-button">Asesoramiento</p>
                    </div>
                  </div>

                    <div class="servicio-info">
                      <h4>ASESORAMIENTO</h4>
                      <p>
                        Información complementaria disponible con guardia de
                        atención permanente.
                      </p>
                  </div>
                </div>
                <div class="servicio-group zoom">
                  <img
                    src="./img/servicios/info.jpg"
                    alt="infoimg"
                    class="servicio-img"
                    onmouseover="changeCursorText()"
                    onmouseleave="getBackCursorText()"
                    id="informacion-actualizada"
                  />

                  <div class="overlay">
                    <div class="content overlay-button">
                      <p id="informacion-actualizada-button">Información Actualizada</p>
                    </div>
                  </div>

                  <div class="servicio-info">
                    <h4>INFORMACIÓN ACTUALIZADA</h4>
                    <p>Meteorológica, mareológica e hidrológica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-arrow">
            <a href="#interes-section"
              ><img src="./img//icons/arrow-down-red.png" alt="arrow-down-white"
            /></a>
          </div>
        </div>
        <div class="cursor"></div>
      </div>

      <div class="section hidden-section">
        <div id="interes-section" class="interes-section">
          <div class="interes-content">
            <a target="_blank" href="#">Herramientas y links de interés:</a>
            <a target="_blank" href="https://www.marinetraffic.com/en/ais/home/centerx:-58.8/centery:-33.8/zoom:8">Live Ship Map,</a>
            <a target="_blank" href="https://www.argentina.gob.ar/puertos-vias-navegables-y-marina-mercante/planilla-de-determinantes">Profundidades Mínimas,</a>
            <a target="_blank" href="http://www.hidro.gov.ar/oceanografia/alturashorarias.asp">Horarios de Mareas,</a>
            <a target="_blank" href="http://www.hidro.gov.ar/oceanografia/tmareas/form_tmareas.asp">Tabla de Mareas,</a>
            <a target="_blank" href="http://www.hidro.gov.ar/oceanografia/pronostico.asp">Pronóstico Mareológico,</a>
            <a target="_blank" href="https://www.smn.gob.ar">Pronóstico Meteorológico,</a>
            <a target="_blank" href=" https://www.argentina.gob.ar/puertos-vias-navegables-y-marina-mercante/boletin-fluvial">Boletín Fluvial,</a>
            <a target="_blank" href="https://www.comisionriodelaplata.org">Comisión Administradora del Rio de la Plata,</a>
            <a target="_blank" href="https://siga.prefecturanaval.gob.ar/">PNA/SIGA,</a>
            <a target="_blank" href="https://siga.prefecturanaval.gob.ar/"> Prefectura Naval Argentina,</a>
            <a target="_blank" href="https://www.windguru.cz/53">WindGURU,</a>
            <a target="_blank" href="https://www.argentina.gob.ar/transporte/administracion-general-puertos-se/via-navegable-troncal/hidrometros">Hidrometros Río Paraná</a>
          </div>

          <div class="hero-arrow">
            <a href="#contacto-section"
              ><img src="./img//icons/arrow-down-red.png" alt="arrow-down-white"
            /></a>
          </div>

        </div>
        <div class="cursor"></div>
      </div>

      <div class="section hidden-section">
        <div id="contacto-section" class="contacto-section">
          <div class="contacto-container">
            <div class="contacto-title title-effect">
              <p>Ponte en contacto</p>
              <h1>Contacto</h1>
            </div>
            <div class="contacto-content reveal">
              <div class="form-content">
                <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" autocomplete="off" method="post">
                  <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input name="name" id="nombre" type="text" required />
                  </div>
                  <div class="form-group">
                    <label for="empresa">Empresa</label>
                    <input name="empresa" id="empresa" type="text" required />
                  </div>
                  <div class="form-group">
                    <label for="telefono">Teléfono</label>
                    <input name="telefono" id="telefono" type="text" required />
                  </div>
                  <div class="form-group">
                    <label for="email">E-mail</label>
                    <input name="email" id="email" type="text" required />
                  </div>
                  <div class="form-group">
                    <label for="mensaje">Mensaje</label>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="submit-group-container">
                  <div class="recaptcha-container">
                    <div class="g-recaptcha" data-sitekey="6Ld3pTwjAAAAAJkpbIsgj8UUcrUgetxr97xfRD1F"></div>
                  </div>
                  <?php
                        if(isset($errors)) {
                          if(count($errors) > 0) {
                            ?>
                            <p>Validar Captcha para continuar</p>
                            <?php
                          }
                        }
                      ?>
                  <div class="form-button-container">
                    <button type="submit">Enviar
                    <img
                      src="./img/iconos-bubble/remero-multipar.svg"
                      alt="remero"
                      class="img-button"
                    />
                  </button>
                  </div>
                  </div>
                </form>
              </div>
              <div class="aside-content">
                <div class="info-group email-group">
                  <h4>E-mail:</h4>
                  <a href="mailto:inforio@riopar.com.ar?"
                    ><span>E-mail</span>: inforio@riopar.com.ar</a
                  >
                </div>
                <div class="info-group telefono-group">
                  <h4>Teléfono</h4>
                  <a href="tel:+541143319111" class="telefono-item"
                    ><span>Teléfono</span>: +54 11 4331.9111</a
                  >
                  <a href="https://wa.me/+5491143319111" target="_blank" class="whatsapp-item"
                    ><span>WhatsApp</span>: +54 9 11 4331.9111</a
                  >
                </div>
                <div class="info-group ubicacion-group">
                  <h4>Donde estamos</h4>
                  <div class="ubicacion-info">
                    <p>Av. Julio A. Roca 620, Piso 13.</p>
                    <div class="localidad-group">
                      <p class="big-screen-info">
                        Ciudad Autónoma de Buenos Aires.
                      </p>
                      <p class="small-screen-info">CABA.</p>
                      <p>Argentina.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-arrow">
            <a href="#footer-section"
              ><img src="./img//icons/arrow-down-white.png" alt="arrow-down-white"
            /></a>
          </div>

        </div>
        <div class="cursor"></div>
      </div>

      <div class="section hidden-section">
        <footer id="footer-section" class="footer-section">
          <div class="footer-content">
            <div class="">
              <div class="contact-info-side">
                <div>
                  <span>Contactenos</span>
                  <h3>inforio@riopar.com</h3>
                  <h3>(+54 11) 4331.9111</h3>
                </div>

                <img id="radio-footer-img" src="./img/iconos-bubble/radio-multipar.svg" alt="radio" />
              </div>

              <div class="links-side">
                <div class="logo-footer">
                  <img
                    src="./img/Logo-Multipar-footer.svg"
                    alt="logo-multipar"
                  />
                </div>

                <div class="links-footer">
                  <div class="multipar-side-footer side-footer">
                    <h4>Multipar</h4>
                    <p>Pilotaje</p>
                    <p>Coordinación y Comunicación</p>
                    <p>Traslados Acuáticos y Terrestres</p>
                  </div>
                  <div class="menu-side-footer side-footer">
                    <h4>Menú</h4>
                    <a href="#">Inicio</a>
                    <span>-</span>
                    <a href="#">Quienes somos</a>
                    <span>-</span>
                    <a href="#">Servicios</a>
                    <span>-</span>
                    <a href="#">Herramientas</a>
                    <span>-</span>
                    <a href="#">Contacto</a>
                  </div>
                  <div class="herramientas-side-footer side-footer">
                    <h4>Herramientas</h4>
                    <a href="#">Live Ship Map</a>
                    <span>-</span>
                    <a href="#">Profundidades Mínimas</a>
                    <span>-</span>
                    <a href="#">Horarios de Mareas</a>
                    <span>-</span>
                    <a href="#">Pronóstico Meteorológico</a>
                    <span>-</span>
                    <a href="#">Comisión Administradora del Rio de la Plata</a>
                    <span>-</span>
                    <a href="#">Prefectura Naval Argentina</a>
                    <span>-</span>
                    <a href="#">WindGURU</a>
                  </div>
                </div>
              </div>
            </div>

            <div id="arrow-up" class="arrow-up-container">
              <a href="#header-section"
                ><img src="./img/icons/arrow-top-white.png" alt="arrow-up"
              /></a>
            </div>
          </div>
          <div class="copyright-side">
            <div class="copyright-container">
              <p>
                Copyright @ 2022 Multipar S.A. Todos los derechos reservados.
              </p>
              <div class="mm-logo">
                <p>Diseño y desarrollo</p>
                <img src="./img/Logo-marcelamosca.svg" />
              </div>
            </div>
          </div>
          <div class="cursor"></div>
        </footer>
      </div>

      <div class="popup popup-container">
      <div class="detalles-servicio-popup">
        <div class="carousel">
          <div class="slider">
            <section>
              <div class="section-content">
                <h2>PRACTICAJE</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril
                </p>
              </div>
            </section>
            <section>
              <div class="section-content">
                <h2>TRANSLADOS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril
                </p>
              </div>
            </section>
            <section>
              <div class="section-content">
                <h2>ASESORAMIENTO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril
                </p>
              </div>
            </section>
            <section>
              <div class="section-content">
                <h2>INFORMACIÓN ACTUALIZADA</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril
                </p>
              </div>
            </section>
          </div>
          <div class="control">
            <span class="servicio__arrow left">
              <i
                id="servicio-arrow-left"
                class="servicio__arrow fas fa-arrow-left"
              ></i>
            </span>
            <span class="servicio__arrow right">
              <i id="servicio-arrow-right" class="fas fa-arrow-right"></i>
            </span>
            <ul>
              <li class="selected"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <span id="btn-close-popup">X</span>
      </div>
      <div class="popup-backdrop"></div>
    </div>
  </body>
</html>
