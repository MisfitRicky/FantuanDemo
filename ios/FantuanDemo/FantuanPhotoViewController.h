//
//  FantuanPhotoViewController.h
//  FantuanDemo
//
//  Created by Ricky on 2021/10/20.
//

#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

NS_ASSUME_NONNULL_BEGIN

@interface FantuanPhotoViewController : UIViewController

@property (nonatomic, copy) RCTBubblingEventBlock onRefreshData;

@property (nonatomic, copy) NSString *showTitle;

- (void)updateTableViewWithModels:(NSArray *)models;

- (void)clearCache;

- (NSString *)getCacheSize;

@end

NS_ASSUME_NONNULL_END
