{{- $imgroot := (.Get 0 ) -}}
{{- $matchfilter := $imgroot | printf "%s*" -}}
{{- $imgnames := .Page.Resources.Match $matchfilter -}}
{{- $img1 := (index $imgnames 0) -}}
{{- $ext := (index (split $img1 ".") 1) -}}
{{- $widths := slice "1200" "800" "600" "380"  -}}
{{- $sizes := "(width < 600px) 380px, (width < 800px) 600px, (width < 1200) 800px, 1200px"  -}}
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
