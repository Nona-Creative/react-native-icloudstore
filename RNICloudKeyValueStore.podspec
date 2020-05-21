Pod::Spec.new do |s|
  s.name         = "RNICloudKeyValueStore"
  s.version      = "1.0.4"
  s.summary      = "AsyncStorage replacement that uses iCloud ubiquitous key store."

  s.homepage     = "https://github.com/Nona-Creative/react-native-icloudstore"

  s.license      = "MIT"
  s.authors      = { "Adrian" => "adrian@nona.digital" }
  s.platform     = :ios, "7.0"

  s.source       = { :git => "https://github.com/Nona-Creative/react-native-icloudstore.git" }

  s.source_files  = "*.{h,m}"

  s.dependency 'React'

end

