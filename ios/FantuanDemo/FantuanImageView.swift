//
//  FantuanImageView.swift
//  FantuanDemo
//
//  Created by Ricky on 2021/11/4.
//

import Foundation
import UIKit
import Nuke

@objcMembers class FantuanImageView: UIImageView {
  
  private var _url: NSString = ""
  public var url: NSString = "" {
//    get {
//      return _url
//    }
    didSet {
//      TODO: func isDatabaseAvailable() throws -> Bool {
      /* ... */
//  }
//      if isDatabaseAvailable() {}
//      _url = newValue
      let finalUrl = URL(string: url as String)
      Nuke.loadImage(with: finalUrl, into: self)
    }
  }
//  init(frame: CGRect, url: NSString) {
//    super.init(frame: frame)
//
//    let finalUrl = URL(string: url as String)
//    Nuke.loadImage(with: finalUrl, into: self)
//  }
  
//  required init?(coder: NSCoder) {
//    fatalError("init(coder:) has not been implemented")
//  }
  
//  class func getImage(url: NSString, image: @escaping(_ image: UIImage) -> Void) {
//        let finalUrl = URL(string: url as String)
//        ImagePipeline.shared.loadImage(
//            with: finalUrl,
//            progress: { preview, completed, total in
//                print(completed,total)
//            },
//            completion: { result in
//                print("task completed")
//                let data = try? result.get().container.image
//                image(data ?? UIImage.init())
//            }
//        )
//    }
}


