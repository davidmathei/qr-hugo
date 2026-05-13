{{- $imgroot := (.Get 0 ) -}}
{{- $matchfilter := $imgroot | printf "%s*" -}}
{{- $imgnames := .Page.Resources.Match $matchfilter -}}
{{- $img1 := (index $imgnames 0) -}}
{{- $ext := (index (split $img1 ".") 1) -}}
{{- $widths := slice "1000" "500" "300"  -}}
{{- $sizes := "(width <= 500px) 300px, (width <= 1000px) 500px, 1000px"  -}}
{{- $srcset := slice -}}

{{- range $widths -}}
   {{- $fname := printf "%v-%vw.%v" $imgroot . $ext -}}
   {{- $f := $.Page.Resources.Get $fname -}}
   {{- $srcset = $srcset | append (printf "%s %sw" $f.RelPermalink .) -}}
{{- end -}}

{{- $src := index $srcset 0 -}}
{{- $src := split $src " " -}}
{{- $src := index $src 0 -}}

<img
  class="contentimg"
  srcset="{{ delimit $srcset ", "}}"
  sizes="{{ $sizes }}"
  src="{{ $src }}"
/>
