//
//  FantuanImage.swift
//  FantuanDemo
//
//  Created by Ricky on 2021/11/4.
//

import Foundation
import UIKit
import Nuke

@objcMembers class FantuanImageHandler: NSObject {
    
  class func getImage(url: NSString, image: @escaping(_ image: UIImage) -> Void) {
        let finalUrl = URL(string: url as String)
        ImagePipeline.shared.loadImage(
            with: finalUrl,
            progress: { preview, completed, total in
                print(completed,total)
            },
            completion: { result in
                print("task completed")
                let data = try? result.get().container.image
                image(data ?? UIImage.init())
            }
        )
    }
}


