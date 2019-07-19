module ApplicationHelper
  def webpack_css(*args)
    urls = Array(args).map do |style|
      webpack_fingerprint_for("#{style}.css")
    end

    stylesheet_link_tag(*urls, media: nil)
  end

  def webpack_js(*args)
    urls = Array(args).map do |js|
      webpack_fingerprint_for("#{js}.js")
    end

    javascript_include_tag(*urls)
  end

  def webpack_fingerprint_for(name)
    @chunk_manifest ||= JSON.parse(File.read('public/packs/manifest.json'))

    if @chunk_manifest[name].nil?
      return ''
    end

    @chunk_manifest[name]
  end
end
