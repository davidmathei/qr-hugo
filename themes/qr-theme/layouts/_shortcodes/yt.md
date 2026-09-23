{{- $id := .Get 0 -}}
{{- $title := .Get 1 -}}
{{- $logo := resources.Get "/images/yt.png" -}}

<div class="videoblock" data="{{ $id }}" type="yt" source="https://www.youtube.com/embed/{{$id}}">
<h5 class="consentheader">
  <a href="javascript:onConsent('{{$id}}')" class="consentlink" >clique aqui para permitir conteúdo externo do YouTube. "{{$title}}"</a>
  <a href="javascript:onConsent('{{$id}}')" class="consentlink"><img src="{{$logo.RelPermalink}}" style="height:40px;margin-left:1.5em;"/></a>
</h5>
<iframe class="ytframe" 
        style="display:none;"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>

</div>
