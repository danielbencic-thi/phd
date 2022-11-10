(TeX-add-style-hook
 "expose"
 (lambda ()
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "amssymb"
    "graphicx")
   (LaTeX-add-labels
    "fig:homotopy"
    "fig:simplicialcomplex"
    "fig:continuouspathplanning"
    "fig:graph-search"
    "fig:rrt"
    "fig:word-construction")
   (LaTeX-add-bibliographies
    "../bib/mybib"))
 :latex)

