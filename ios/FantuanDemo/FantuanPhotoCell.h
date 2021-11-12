//
//  FantuanPhotoCell.h
//  FantuanDemo
//
//  Created by Ricky on 2021/10/20.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface FantuanPhotoCell : UITableViewCell

@property (nonatomic, copy) NSString *showTitle;

- (void)updateViewWithUrl:(NSString *)imageUrl;

@end

NS_ASSUME_NONNULL_END
