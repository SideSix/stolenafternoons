<!DOCTYPE html>
<html lang="en" dir="ltr" id="modernizrcom" class="no-js">
<head>
   <meta charset="utf-8">
   <title>Modernizr Download Builder</title>

   <meta name="description" content="Modernizr is an open-source JavaScript library that helps you build the next generation of HTML5 and CSS3-powered websites.">
   <meta name="author" content="Faruk Ateş, Paul Irish, Alex Sexton">

   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
   <meta name="google-site-verification" content="il-E6_rjDwhABF0CtrGlyr-tWXUSPY9NfDil4AdIBjs" />
   <meta name="viewport" content="width=device-width">
   <link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />
   <link rel="alternate" href="http://feeds.feedburner.com/Modernizr" type="application/rss+xml" title="RSS" />

   <!--[if lte IE 7]><link rel="stylesheet" href="/i/css/ie6.1.1.css" media="screen, projection"><![endif]-->
   <!--[if (gt IE 7)|!(IE)]><!--><link rel="stylesheet" href="/i/css/modernizr-2.1.1.css?v=1" type="text/css" media="screen"><!--<![endif]-->


   <script>
    var _errs=["4fceab6b3cac48023f00000a"];(function(a,b){a.onerror=function(){_errs.push(arguments)};
    var d=function(){var a=b.createElement("script"),c=b.getElementsByTagName("script")[0];
    a.src="//d15qhc0lu1ghnk.cloudfront.net/beacon.js";a.async=!0;
    c.parentNode.insertBefore(a,c)};a.addEventListener?a.addEventListener("load",d,!1):
    a.attachEvent("onload",d)})(window,document);
   </script>


   <script src="/i/js/jquery-1.7.min.js"></script>
   <script src="/i/js/modernizr.com-custom-2.6.1-01.js"></script>
   <script src="/i/js/respond.min.js"></script>
</head>

<body id="builder">

  <div class="page">

     <nav role="navigation">
        <ul id="nav">
           <li><a class="wt current" href="/download/">Download</a></li>
           <li><a class="wt" href="/docs/">Documentation</a></li>
           <li><a class="wt" href="/resources/">Resources</a></li>
           <li><a class="wt" href="/news/">News</a></li>
        </ul>
     </nav>

     <div class="container clrfx">

        <header id="masthead" class="loading">
           <hgroup>
              <a href="/" class="banner" role="banner">
                 <h1 class="title"><img src="/i/img/logo-x12.png" alt="" class="logo">Modernizr</h1>
                 <h2 class="subtitle"><span>Front</span>-end Development Done Right</h2>
              </a>
           </hgroup>
        </header>
        <!--
        <aside class="quote">
           <q>Modernizr is an essential part of my toolkit of files.</q>
           <cite>Andy Clarke</cite>, <a class="cite-source" href="http://www.stuffandnonsense.co.uk/" rel="external">Stuff &amp; Nonsense</a>
        </aside>
        -->
        <aside class="quote">
           <q>An indispensable tool.</q>
           <cite>Bruce Bowman</cite>, <a class="cite-source" href="https://browserlab.adobe.com/" rel="external">Adobe BrowserLab Product Manager</a>
        </aside>

        <div id="content" class="clrfx">

           <div id="primary" class="clrfx" role="main">
                          <section id="download" class="wt ">
               <h2><a href="/download/" class="wt dl-link">Download Modernizr 2.6.2</a></h2>
               <p class="intro-p">Use the <a href="/downloads/modernizr-latest.js">Development version</a> to develop with and learn from. Then, when you’re ready for production, use the build tool below to pick only the tests you need.</p>

               <div class="swap-region">
               <form action="#" class="builder">
                  <fieldset class="features" id="group-css3">
                     <legend class="wt"><abbr title="Cascading Style Sheets">CSS</abbr>3</legend>
                     <ul>
                        <li id="fontface"><label><input type="checkbox" value="fontface" /> @font-face</label></li>
                        <li id="backgroundsize"><label><input type="checkbox" value="backgroundsize" /> background-size</label></li>
                        <li id="borderimage"><label><input type="checkbox" value="borderimage" /> border-image</label></li>
                        <li id="borderradius"><label><input type="checkbox" value="borderradius" /> border-radius</label></li>
                        <li id="boxshadow"><label><input type="checkbox" value="boxshadow" /> box-shadow</label></li>
                        <li id="flexbox"><label><input type="checkbox" value="flexbox" /> Flexible Box Model <small>(flexbox)</small></label></li>
                        <li id="flexboxlegacy"><label><input type="checkbox" value="flexboxlegacy" /> Flexbox Legacy</label></li>
                        <li id="hsla"><label><input type="checkbox" value="hsla" /> <abbr title="Hue, Saturation, Lightness, Alpha">hsla</abbr>()</label></li>
                        <li id="multiplebgs"><label><input type="checkbox" value="multiplebgs" /> multiple backgrounds</label></li>
                        <li id="opacity"><label><input type="checkbox" value="opacity" /> opacity</label></li>
                        <li id="rgba"><label><input type="checkbox" value="rgba" /> <abbr title="Red, Green, Blue, Alpha">rgba</abbr>()</label></li>
                        <li id="textshadow"><label><input type="checkbox" value="textshadow" /> text-shadow</label></li>
                        <li id="cssanimations"><label><input type="checkbox" value="cssanimations" /> CSS Animations</label></li>
                        <li id="csscolumns"><label><input type="checkbox" value="csscolumns" /> CSS Columns</label></li>
                        <li id="generatedcontent"><label><input type="checkbox" value="generatedcontent" /> CSS Generated Content</label></li>
                        <li class="note">(:before/:after)</li>
                        <li id="cssgradients"><label><input type="checkbox" value="cssgradients" /> CSS Gradients</label></li>
                        <li id="cssreflections"><label><input type="checkbox" value="cssreflections" /> CSS Reflections</label></li>
                        <li id="csstransforms"><label><input type="checkbox" value="csstransforms" /> CSS 2D Transforms</label></li>
                        <li id="csstransforms3d"><label><input type="checkbox" value="csstransforms3d" /> CSS 3D Transforms</label></li>
                        <li id="csstransitions"><label><input type="checkbox" value="csstransitions" /> CSS Transitions</label></li>
                     </ul>
                  </fieldset>
                  <fieldset class="features" id="group-html5">
                     <legend class="wt"><abbr title="HyperText Markup Language">HTML</abbr>5</legend>
                     <ul>
                        <li id="applicationcache"><label><input type="checkbox" value="applicationcache" /> applicationCache</label></li>
                        <li id="canvas"><label><input type="checkbox" value="canvas" /> Canvas</label></li>
                        <li id="canvastext"><label><input type="checkbox" value="canvastext" /> Canvas Text</label></li>
                        <li id="draganddrop"><label><input type="checkbox" value="draganddrop" /> Drag 'n Drop</label></li>
                        <li id="hashchange"><label><input type="checkbox" value="hashchange" /> hashchange</label></li>
                        <li id="history"><label><input type="checkbox" value="history" /> History <small>(pushState)</small></label></li>
                        <li id="audio"><label><input type="checkbox" value="audio" /> HTML5 Audio</label></li>
                        <li id="video"><label><input type="checkbox" value="video" /> HTML5 Video</label></li>
                        <li id="indexeddb"><label><input type="checkbox" value="indexeddb" /> IndexedDB</label></li>
                        <li id="input"><label><input type="checkbox" value="input" /> Input Attributes</label></li>
                        <li class="note"><em>Note: does not add classes</em></li>
                        <li id="inputtypes"><label><input type="checkbox" value="inputtypes" /> Input Types</label></li>
                        <li class="note"><em>Note: does not add classes</em></li>
                        <li id="localstorage"><label><input type="checkbox" value="localstorage" /> localStorage</label></li>
                        <li id="postmessage"><label><input type="checkbox" value="postmessage" /> postMessage</label></li>
                        <li id="sessionstorage"><label><input type="checkbox" value="sessionstorage" /> sessionStorage</label></li>
                        <li id="websockets"><label><input type="checkbox" value="websockets" /> Web Sockets</label></li>
                        <li id="websqldatabase"><label><input type="checkbox" value="websqldatabase" /> Web SQL Database</label></li>
                        <li id="webworkers"><label><input type="checkbox" value="webworkers" /> Web Workers</label></li>
                     </ul>
                  </fieldset>
                  <fieldset class="features" id="group-misc">
                     <legend class="wt"><abbr title="Miscellaneous">Misc.</abbr></legend>
                     <ul>
                        <li id="geolocation"><label><input type="checkbox" value="geolocation" /> Geolocation API</label></li>
                        <li id="inlinesvg"><label><input type="checkbox" value="inlinesvg" /> Inline SVG</label></li>
                        <li id="smil"><label><input type="checkbox" value="smil" /> SMIL</label></li>
                        <li id="svg"><label><input type="checkbox" value="svg" /> SVG</label></li>
                        <li id="svgclippaths"><label><input type="checkbox" value="svgclippaths" /> SVG clip paths</label></li>
                        <li id="touch"><label><input type="checkbox" value="touch" /> Touch Events</label></li>
                        <li id="webgl"><label><input type="checkbox" value="webgl" /> WebGL</label></li>
                     </ul>
                  </fieldset>
                  <fieldset class="features" id="group-plugins">
                     <legend class="wt">Extra</legend>
                     <ul>
                       <li id="shiv"><label><input type="checkbox" checked value="shiv" /> html5shiv v3.6</label></li>
                       <li id="printshiv"><label><input type="checkbox" value="printshiv" /> html5shiv v3.6 w/ printshiv</label></li>
                        <li id="load"><label><input type="checkbox" checked value="load" /> Modernizr.load <br>( <a href="http://yepnopejs.com/" target="_new">yepnope.js</a> )</label></li>
                        <li id="mq"><label><input type="checkbox" value="mq" /> Media Queries</label></li>
                        <li id="cssclasses">
                          <label><input type="checkbox" checked value="cssclasses" /> Add CSS Classes</label>
                          <div id="cssprefixcontainer">
                            <label><abbr class="help" title="Add a prefix if Modernizr’s default class names conflict with your CSS. A prefix of `mod-` means classes like `.mod-video`">className prefix:</abbr><input type="text" id="cssprefix" class="textfield" /></label>
                          </div>
                        </li>
                     </ul>
                  </fieldset>
                  <fieldset class="features" id="group-extensibility">
                     <details>
                        <summary>Extensibility</summary>
                        <ul>
                           <li id="addtest"><label><input type="checkbox" value="addtest" /> Modernizr.addTest</label></li>
                           <li id="prefixed"><label><input type="checkbox" value="prefixed" /> Modernizr.prefixed()</label></li>
                           <li id="teststyles"><label><input type="checkbox" value="teststyles" /> Modernizr.testStyles()</label></li>
                           <li id="testprop"><label><input type="checkbox" value="testprop" /> Modernizr.testProp()</label></li>
                           <li id="testallprops"><label><input type="checkbox" value="testallprops" /> Modernizr.testAllProps()</label></li>
                           <li id="hasevent"><label><input type="checkbox" value="hasevent" /> Modernizr.hasEvent()</label></li>
                           <li id="prefixes"><label><input type="checkbox" value="prefixes" /> Modernizr._prefixes</label></li>
                           <li id="domprefixes"><label><input type="checkbox" value="domprefixes" /> Modernizr._domPrefixes</label></li>
                        </ul>
                     </details>
                  </fieldset>
                  <fieldset class="features" id="community-feature-detects">
                     <details>
                        <summary>Non-core detects</summary>
                        <div>
                        <p>For more info, docs and gotchas on these, <a href="https://github.com/Modernizr/Modernizr/tree/master/feature-detects">browse their source on github</a>.</p>
                        <ul>
                          <li id="a_download"><label><input type="checkbox" value="a_download"> a-download</label></li>
                          <li id="audio_audiodata_api"><label><input type="checkbox" value="audio_audiodata_api"> audio-audiodata-api</label></li>
                          <li id="audio_webaudio_api"><label><input type="checkbox" value="audio_webaudio_api"> audio-webaudio-api</label></li>
                          <li id="battery_api"><label><input type="checkbox" value="battery_api"> battery-api</label></li>
                          <li id="battery_level"><label><input type="checkbox" value="battery_level"> battery-level</label></li>
                          <li id="blob_constructor"><label><input type="checkbox" value="blob_constructor"> blob-constructor</label></li>
                          <li id="canvas_todataurl_type"><label><input type="checkbox" value="canvas_todataurl_type"> canvas-todataurl-type</label></li>
                          <li id="contenteditable"><label><input type="checkbox" value="contenteditable"> contenteditable</label></li>

                          <li id="contentsecuritypolicy"><label><input type="checkbox" value="contentsecuritypolicy"> contentsecuritypolicy</label></li>



                          <li id="contextmenu"><label><input type="checkbox" value="contextmenu"> contextmenu</label></li>
                          <li id="cookies"><label><input type="checkbox" value="cookies"> cookies</label></li>
                          <li id="cors"><label><input type="checkbox" value="cors"> cors</label></li>

                          <!-- its broken
                          <li id="css_backgroundcliptext"><label><input type="checkbox" value="css_backgroundcliptext"> css-backgroundcliptext</label></li>
                        -->

                          <li id="css_backgroundposition_shorthand"><label><input type="checkbox" value="css_backgroundposition_shorthand"> css-backgroundposition-shorthand</label></li>
                          <li id="css_backgroundposition_xy"><label><input type="checkbox" value="css_backgroundposition_xy"> css-backgroundposition-xy</label></li>
                          <li id="css_backgroundrepeat"><label><input type="checkbox" value="css_backgroundrepeat"> css-backgroundrepeat</label></li>
                          <li id="css_backgroundsizecover"><label><input type="checkbox" value="css_backgroundsizecover"> css-backgroundsizecover</label></li>
                          <li id="css_boxsizing"><label><input type="checkbox" value="css_boxsizing"> css-boxsizing</label></li>
                          <li id="css_calc"><label><input type="checkbox" value="css_calc"> css-calc</label></li>
                          <li id="css_cubicbezierrange"><label><input type="checkbox" value="css_cubicbezierrange"> css-cubicbezierrange</label></li>
                          <li id="css_displayrunin"><label><input type="checkbox" value="css_displayrunin"> css-displayrunin</label></li>
                          <li id="css_displaytable"><label><input type="checkbox" value="css_displaytable"> css-displaytable</label></li>
                          <li id="css_filters"><label><input type="checkbox" value="css_filters"> css-filters</label></li>
                          <li id="css_hyphens"><label><input type="checkbox" value="css_hyphens"> css-hyphens</label></li>
                          <li id="css_lastchild"><label><input type="checkbox" value="css_lastchild"> css-lastchild</label></li>
                          <li id="css_mask"><label><input type="checkbox" value="css_mask"> css-mask</label></li>
                          <li id="css_mediaqueries"><label><input type="checkbox" value="css_mediaqueries"> css-mediaqueries</label></li>
                          <li id="css_objectfit"><label><input type="checkbox" value="css_objectfit"> css-objectfit</label></li>



                          <li id="css_overflow_scrolling"><label><input type="checkbox" value="css_overflow_scrolling"> css-overflow-scrolling</label></li>
                          <li id="css_pointerevents"><label><input type="checkbox" value="css_pointerevents"> css-pointerevents</label></li>
                          <li id="css_positionsticky"><label><input type="checkbox" value="css_positionsticky"> css-positionsticky</label></li>



                          <li id="css_remunit"><label><input type="checkbox" value="css_remunit"> css-remunit</label></li>
                          <li id="css_regions"><label><input type="checkbox" value="css_regions"> css-regions</label></li>
                          <li id="css_resize"><label><input type="checkbox" value="css_resize"> css-resize</label></li>
                          <li id="css_scrollbars"><label><input type="checkbox" value="css_scrollbars"> css-scrollbars</label></li>
                          <li id="css_subpixelfont"><label><input type="checkbox" value="css_subpixelfont"> css-subpixelfont</label></li>
                          <li id="css_supports"><label><input type="checkbox" value="css_supports"> css @supports</label></li>

                          <li id="css_userselect"><label><input type="checkbox" value="css_userselect"> css-userselect</label></li>

                          <li id="css_vhunit"><label><input type="checkbox" value="css_vhunit"> css-vhunit</label></li>
                          <li id="css_vmaxunit"><label><input type="checkbox" value="css_vmaxunit"> css-vmaxunit</label></li>
                          <li id="css_vminunit"><label><input type="checkbox" value="css_vminunit"> css-vminunit</label></li>
                          <li id="css_vwunit"><label><input type="checkbox" value="css_vwunit"> css-vwunit</label></li>


                          <li id="custom_protocol_handler"><label><input type="checkbox" value="custom_protocol_handler"> custom-protocol-handler</label></li>
                          <li id="dataview_api"><label><input type="checkbox" value="dataview_api"> dataview-api</label></li>
                          <li id="dom_classlist"><label><input type="checkbox" value="dom_classlist"> dom-classlist</label></li>
                          <li id="dom_createElement_attrs"><label><input type="checkbox" value="dom_createElement_attrs"> dom-createElement-attrs</label></li>
                          <li id="dom_dataset"><label><input type="checkbox" value="dom_dataset"> dom-dataset</label></li>
                          <li id="dom_microdata"><label><input type="checkbox" value="dom_microdata"> dom-microdata</label></li>
                          <li id="elem_datalist"><label><input type="checkbox" value="elem_datalist"> elem-datalist</label></li>
                          <li id="elem_details"><label><input type="checkbox" value="elem_details"> elem-details</label></li>
                          <li id="elem_output"><label><input type="checkbox" value="elem_output"> elem-output</label></li>
                          <li id="elem_progress_meter"><label><input type="checkbox" value="elem_progress_meter"> elem-progress-meter</label></li>
                          <li id="elem_ruby"><label><input type="checkbox" value="elem_ruby"> elem-ruby</label></li>
                          <li id="elem_time"><label><input type="checkbox" value="elem_time"> elem-time</label></li>
                          <li id="elem_track"><label><input type="checkbox" value="elem_track"> elem-track</label></li>
                          <li id="emoji"><label><input type="checkbox" value="emoji"> emoji</label></li>
                          <li id="es5_strictmode"><label><input type="checkbox" value="es5_strictmode"> es5-strictmode</label></li>
                          <li id="event_deviceorientation_motion"><label><input type="checkbox" value="event_deviceorientation_motion"> event-deviceorientation-motion</label></li>
                          <li id="exif_orientation"><label><input type="checkbox" value="exif_orientation"> exif-orientation</label></li>
                          <li id="file_api"><label><input type="checkbox" value="file_api"> file-api</label></li>
                          <li id="forms_fileinput"><label><input type="checkbox" value="forms_fileinput"> forms-fileinput</label></li>
                          <li id="forms_formattribute"><label><input type="checkbox" value="forms_formattribute"> forms-formattribute</label></li>


                          <li id="file_filesystem"><label><input type="checkbox" value="file_filesystem"> file-filesystem</label></li>
                          <li id="forms_placeholder"><label><input type="checkbox" value="forms_placeholder"> forms-placeholder</label></li>
                          <li id="forms_speechinput"><label><input type="checkbox" value="forms_speechinput"> forms-speechinput</label></li>
                          <li id="forms_validation"><label><input type="checkbox" value="forms_validation"> forms-validation</label></li>
                          <li id="fullscreen_api"><label><input type="checkbox" value="fullscreen_api"> fullscreen-api</label></li>
                          <li id="gamepad"><label><input type="checkbox" value="gamepad"> gamepad</label></li>
                          <li id="getusermedia"><label><input type="checkbox" value="getusermedia"> getusermedia</label></li>
                          <li id="ie8compat"><label><input type="checkbox" value="ie8compat"> ie8compat</label></li>
                          <li id="iframe_sandbox"><label><input type="checkbox" value="iframe_sandbox"> iframe-sandbox</label></li>
                          <li id="iframe_seamless"><label><input type="checkbox" value="iframe_seamless"> iframe-seamless</label></li>
                          <li id="iframe_srcdoc"><label><input type="checkbox" value="iframe_srcdoc"> iframe-srcdoc</label></li>


                          <li id="img_apng"><label><input type="checkbox" value="img_apng"> img-apng</label></li>
                          <li id="img_webp"><label><input type="checkbox" value="img_webp"> img-webp</label></li>
                          <li id="json"><label><input type="checkbox" value="json"> json</label></li>
                          <li id="lists_reversed"><label><input type="checkbox" value="lists_reversed"> lists-reversed</label></li>
                          <li id="mathml"><label><input type="checkbox" value="mathml"> mathml</label></li>
                          <li id="network_connection"><label><input type="checkbox" value="network_connection"> network-connection</label></li>
                          <li id="network_eventsource"><label><input type="checkbox" value="network_eventsource"> network-eventsource</label></li>
                          <li id="network_xhr2"><label><input type="checkbox" value="network_xhr2"> network-xhr2</label></li>
                          <li id="notification"><label><input type="checkbox" value="notification"> notification</label></li>
                          <li id="performance"><label><input type="checkbox" value="performance"> performance</label></li>
                          <li id="pointerlock_api"><label><input type="checkbox" value="pointerlock_api"> pointerlock-api</label></li>

                          <li id="quota_management_api"><label><input type="checkbox" value="quota_management_api"> quota-management-api</label></li>
                          <li id="requestanimationframe"><label><input type="checkbox" value="requestanimationframe"> requestanimationframe</label></li>
                          <li id="script_async"><label><input type="checkbox" value="script_async"> script-async</label></li>
                          <li id="script_defer"><label><input type="checkbox" value="script_defer"> script-defer</label></li>
                          <li id="style_scoped"><label><input type="checkbox" value="style_scoped"> style-scoped</label></li>
                          <li id="svg_filters"><label><input type="checkbox" value="svg_filters"> svg-filters</label></li>
                          <li id="unicode"><label><input type="checkbox" value="unicode"> unicode</label></li>
                          <li id="url_data_uri"><label><input type="checkbox" value="url_data_uri"> url-data-uri</label></li>

                          <li id="userdata"><label><input type="checkbox" value="userdata"> userdata</label></li>
                          <li id="vibration"><label><input type="checkbox" value="vibration"> vibration</label></li>
                          <li id="web_intents"><label><input type="checkbox" value="web_intents"> web-intents</label></li>
                          <li id="webgl_extensions"><label><input type="checkbox" value="webgl_extensions"> webgl-extensions</label></li>
                          <li id="websockets_binary"><label><input type="checkbox" value="websockets_binary"> websockets-binary</label></li>
                          <li id="window_framed"><label><input type="checkbox" value="window_framed"> window-framed</label></li>
                          <li id="workers_blobworkers"><label><input type="checkbox" value="workers_blobworkers"> workers-blobworkers</label></li>
                          <li id="workers_dataworkers"><label><input type="checkbox" value="workers_dataworkers"> workers-dataworkers</label></li>
                          <li id="workers_sharedworkers"><label><input type="checkbox" value="workers_sharedworkers"> workers-sharedworkers</label></li>


                          <!-- old community list
                           <li id="cookies"><label><input type="checkbox" value="cookies" /> Cookies</label></li>
                           <li id="css_backgroundrepeat"><label><input type="checkbox" value="css_backgroundrepeat" /> background-repeat</label></li>
                           <li id="css_backgroundsizecover"><label><input type="checkbox" value="css_backgroundsizecover" /> background-size-cover</label></li>
                           <li id="css_boxsizing"><label><input type="checkbox" value="css_boxsizing" /> box-sizing</label></li>
                           <li id="css_cubicbezierrange"><label><input type="checkbox" value="css_cubicbezierrange" /> cubic-bezier-range</label></li>
                           <li id="css_displaytable"><label><input type="checkbox" value="css_displaytable" /> display table</label></li>
                           <li id="css_overflow_scrolling"><label><input type="checkbox" value="css_overflow_scrolling" /> overflow-scrolling</label></li>
                           <li id="css_pointerevents"><label><input type="checkbox" value="css_pointerevents" /> pointer events</label></li>
                           <li id="css_userselect"><label><input type="checkbox" value="css_userselect" /> userselect</label></li>
                           <li id="custom_protocol_handler"><label><input type="checkbox" value="custom_protocol_handler" /> Custom Protocol Handler</label></li>
                           <li id="dom_createElement_attrs"><label><input type="checkbox" value="dom_createElement_attrs" /> createElement attr</label></li>
                           <li id="elem_details"><label><input type="checkbox" value="elem_details" /> details</label></li>
                           <li id="elem_progress_meter"><label><input type="checkbox" value="elem_progress_meter" /> Progress Meter</label></li>
                           <li id="emoji"><label><input type="checkbox" value="emoji" /> Emoji</label></li>
                           <li id="event_deviceorientation_motion"><label><input type="checkbox" value="event_deviceorientation_motion" /> deviceorientation motion</label></li>
                           <li id="file_api"><label><input type="checkbox" value="file_api" /> File API</label></li>
                           <li id="forms_placeholder"><label><input type="checkbox" value="forms_placeholder" /> placeholder</label></li>
                           <li id="hyphens"><label><input type="checkbox" value="hyphens" /> hyphens</label></li>
                           <li id="img_webp"><label><input type="checkbox" value="img_webp" /> webp</label></li>
                           <li id="url_data_uri"><label><input type="checkbox" value="url_data_uri" /> data-uri</label></li>
                           <li id="webgl_extensions"><label><input type="checkbox" value="webgl_extensions" /> webgl extensions</label></li>
                           <li id="window_framed"><label><input type="checkbox" value="window_framed" /> framed</label></li>
                           <li id="workers_sharedworkers"><label><input type="checkbox" value="workers_sharedworkers" /> sharedworkers</label></li>
                          -->
                        </ul>
                        </div>
                     </details>
                  </fieldset>




                  <div class="buttons-area">
                     <a href="#-generate" class="wt btn dev" id="generate">Generate! <span>(requires JavaScript)</span></a>
                     <a class="btn2">Download custom build</a>
                  </div>
               </form>

               <div id="source">
                  <textarea readonly="readonly" class="source-area default" id="generatedSource">// Minified source</textarea>
                  <div class="dontmin-container"><label for="dontmin"><input type="checkbox" id="dontmin" value="dontmin" /> <small>Don't Minify Source</small></label></div>
               </div>

               </div><!-- .swap-region -->

            </section>

        <script src="/i/js/builderapp.min.js?sept3" async data-currentbuildversion="2.6.2"></script>

           </div><!-- #primary -->

           <div id="secondary" class="clrfx" role="complementary">
                      <section id="community">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" id="donateForm"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="T3SNE26ADDVX6">
            <h2 class="hfd">Community links</h2>
            <ul id="places">
              <li data-alt="Follow us on Twitter"><a rel="external" href="https://twitter.com/Modernizr" class="icon twitter">Follow us on Twitter</a></li>
              <li data-alt="Contribute on github"><a rel="external" href="https://github.com/Modernizr/Modernizr" class="icon github">Contribute on github</a></li>
              <li data-alt="Subscribe with RSS"><a rel="external" href="http://feeds.feedburner.com/Modernizr" class="icon rss">Subscribe with RSS</a></li>
              <li data-alt="Donate to Modernizr" class="donate"><a href="#donate" class="icon" id="donateLink">Donate to Modernizr</a></li>
              <li class="hide-if-js"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" name="submit" alt="Love Modernizr? Donate to help the project!"></li>
            </ul>
          </form>
        </section>


                        <section id="latest-news">
          <h2>Latest news</h2>

          <article>
            <footer><time datetime="2012-09-04T20:35:20">September 4th, 2012</time></footer>
            <h3><a href="/news/modernizr-262" class="permalink bookmark">Modernizr 2.6.2 released</a></h3>
            <p>Modernizr 2.6.2 is out with some small updates.</p>
          </article>

          <h4>Previous</h4>

          <article>
            <footer><time datetime="2012-07-19T20:20:20">July 19th, 2012</time></footer>
            <h3><a href="/news/modernizr-260" class="permalink bookmark">Modernizr 2.6 released</a></h3>
          </article>

          <article>
            <footer><time datetime="2012-02-06T20:20:20">February 6th, 2012</time></footer>
            <h3><a href="/news/modernizr-25" class="permalink bookmark">Modernizr 2.5: Supercharged for 2012</a></h3>
          </article>

          <article>
            <footer><time datetime="2011-11-07T10:48:00">November 7th, 2011</time></footer>
            <h3><a href="/news/modernizr-test-suite" class="permalink bookmark">How Does Modernizr’s Test Suite Work?</a></h3>
          </article>

        </section>


           </div><!-- #secondary -->

        </div><!-- #content -->

     </div><!-- .container -->

     <div class="footer-shim"></div>
  </div><!-- .page -->

  <div class="footer-anchor">
   <footer id="page-footer">

      <section id="used-by">
         <div class="container">

            <section id="html5">
               <a href="http://www.w3.org/html/logo/">
                  <img id="h5logo" src="/i/img/html5-logo.png" alt="We use HTML5 and related technologies">
                  <img class="h5s" src="/i/img/html5-a.png" alt="">
                  <img class="h5s" src="/i/img/html5-b.png" alt="">
               </a>
            </section>

            <h4>Used by</h4>
            <ol>
               <li><a class="twitter" href="http://twitter.com/">Twitter</a></li>
               <li><a class="google" href="http://google.com/">Google</a></li>
               <li><a class="microsoft" href="http://microsoft.com/">Microsoft</a></li>
               <li><a class="economist" href="http://economist.com/">The Economist</a></li>
               <li><a class="about" href="http://about.com/">About.com</a></li>
               <li><a class="knot" href="http://theknot.com/">The Knot</a></li>
               <li><a class="good" href="http://good.is/">GOOD Magazine</a></li>
               <li><a class="posterous" href="http://posterous.com/">Posterous</a></li>
            </ol>

         </div>
      </section>

      <section id="team">

         <div class="container">

            <h4>Created by</h4>
            <ul class="clrfx">
               <li class="team"><a class="wt" href="http://farukat.es/"><img src="/i/img/Faruk-Ates.jpg" width="48" height="48" alt=""/>Faruk Ateş</a> <strong>Creator &amp; Lead</strong> <a href="http://twitter.com/KuraFire" class="twitter">@KuraFire</a></li>
               <li class="team"><a class="wt" href="http://paulirish.com/"><img src="/i/img/Paul-Irish.jpg" width="48" height="48" alt=""/>Paul Irish</a> <strong>Lead Developer</strong> <a href="http://twitter.com/paul_irish" class="twitter">@paul_irish</a></li>
            <!-- </ul>
            <ul class="clrfx"> -->
               <li class="team"><a class="wt" href="http://alexsexton.com/"><img src="/i/img/Alex-Sexton2.jpg" width="48" height="48" alt=""/>Alex Sexton</a> <strong>Developer</strong> <a href="http://twitter.com/SlexAxton" class="twitter">@SlexAxton</a></li>
               <li class="team"><a class="wt" href="http://www.thecssninja.com/"><img src="/i/img/Ryan-Seddon.jpeg" width="48" height="48" alt=""/>Ryan Seddon</a> <strong>Developer</strong> <a href="http://twitter.com/ryanseddon" class="twitter">@ryanseddon</a></li>
               <li class="team"><a class="wt" href="http://protofunc.com/"><img src="/i/img/Alexander-Farkas.jpg" width="48" height="48" alt=""/>Alexander Farkas</a> <strong>Developer</strong></li>
            </ul>

            <p id="microlib" class="wt">
               Modernizr is the right micro-library to get you up and running with HTML5 &amp; CSS3 today.
            </p>
         </div><!-- .container -->

      </section>

      <section id="the-end">
         <div class="container">
            <p class="sponsors">Proudly sponsored by: <a href="http://typekit.com/" class="sponsor wt">Typekit</a> and <a href="http://www.browserstack.com/" class="sponsor wt">BrowserStack</a></p>
            <!-- TODO: <a href="#credits" id="credits">credits</a> -->
            <p class="copyright" role="contentinfo">Copyright © 2009—2012. Modernizr is available under the <a href="/license/" class="wt">MIT license</a>.</p>
         </div>
      </section>

      <!-- </div> -->

   </footer>
  </div><!-- .footer-anchor -->

</body>
</html>
