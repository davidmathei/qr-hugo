{{- $id := .Get 0 -}}
{{- $title := .Get 1 -}}
{{- $logo := resources.Get "/images/vimeo.png" -}}

<div class="videoblock" data="{{ $id }}" type="yt" source="https://player.vimeo.com/video/{{$id}}">
<h5 class="consentheader">
  <a href="javascript:onConsent('{{$id}}')" class="consentlink" >clicque aqui para permitir conteúdo externo do Vimeo. "{{$title}}"</a>
  <a href="javascript:onConsent('{{$id}}')" class="consentlink"><img src="{{$logo.RelPermalink}}" style="height:30px;margin-left:2em;"/></a>
</h5>
<iframe title="vimeo-player"
        class="vimeoframe" 
        style="display:none;"
        frameborder="0" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allow="fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
</div>

