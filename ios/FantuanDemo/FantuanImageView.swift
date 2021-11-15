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
  public var url: NSString {
    get {
      return _url
    }
    set(newValue) {
        _url = newValue
        guard let finalUrl = URL(string: newValue as String) else { return }
        Nuke.loadImage(with: ImageRequest(url: finalUrl), into: self)
    }
  }
}


