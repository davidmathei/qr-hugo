{{- $imgroot := (.Get 0 ) -}}
{{- $matchfilter := $imgroot | printf "%s*" -}}
{{- $imgnames := .Page.Resources.Match $matchfilter -}}
{{- $img1 := (index $imgnames 0) -}}
{{- $ext := (index (split $img1 ".") 1) -}}
{{- $widths := slice "960" "750" "500" "360"  -}}
{{- $sizes := "(width < 500px) 360px, (width < 750px) 500px, (width < 960) 750px, 960px"  -}}
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
