{{- $id := .Get 0 -}}
{{- $title := .Get 1 -}}
{{- $logo := resources.Get "/images/sc-orange.webp" -}}
<div class="videoblock" 
     data="{{$id}}"
     source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A{{$id}}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
<h5 class="consentheader">
  <a href="javascript:onConsent('{{$id}}')" class="consentlink" >clique aqui para permitir conteúdo externo do SoundCloud. "{{$title}}"</a>
  <a href="javascript:onConsent('{{$id}}')" class="consentlink"><img src="{{$logo.RelPermalink}}" style="height:30px;margin-left:2em;"/></a>
</h5>
<iframe class="scframe" 
        style="display:none;" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay; encrypted-media"></iframe>
</div>

