(TeX-add-style-hook
 "proposal"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "11pt" "twocolumn")))
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art11"
    "amssymb"
    "graphicx")
   (LaTeX-add-labels
    "fig:homotopy"
    "fig:cspace"
    "fig:homotopy_classes"
    "fig:graph-search"
    "fig:rrt"
    "fig:word-construction"
    "fig:tethered-exploration"
    "tab:topological-methods")
   (LaTeX-add-bibliographies
    "../bib/mybib"))
 :latex)

