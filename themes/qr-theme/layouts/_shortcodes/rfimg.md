{{- $imgroot := (.Get 0 ) -}}
{{- $matchfilter := $imgroot | printf "%s*" -}}
{{- $imgnames := .Page.Resources.Match $matchfilter -}}
{{- $img1 := (index $imgnames 0) -}}
{{- $ext := (index (split $img1 ".") 1) -}}
{{- $widths := slice "500" "300"  -}}
{{- $sizes := "(width <= 500px) 300px, 500px"  -}}
{{- $srcset := slice -}}
{{- $src := $img1.RelPermalink  -}}

{{- range $widths -}}
   {{- $fname := printf "%v-%vw.%v" $imgroot . $ext -}}
   {{- $f := $.Page.Resources.Get $fname -}}
   {{- $srcset = $srcset | append (printf "%s %sw" $f.RelPermalink .) -}}
{{- end -}}

<img
  class="contentimgfloat"
  srcset="{{ delimit $srcset ", "}}"
  sizes="{{ $sizes }}"
  src="{{ $src }}"
/>
