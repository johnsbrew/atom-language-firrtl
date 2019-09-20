exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.firrtl', {
    type: 'preproc_arg',
    language (arg) { return 'firrtl' },
    content (arg) { return arg }
  })

}
