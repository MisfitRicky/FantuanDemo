//
//  FantuanPhotoViewManager.m
//  FantuanDemo
//
//  Created by Ricky on 2021/10/19.
//

#import "FantuanPhotoViewManager.h"
#import <React/RCTUIManager.h>
#import "FantuanPhotoViewController.h"
#import "FantuanDemo-Swift.h"

@interface FantuanPhotoViewManager()

@property (nonatomic, strong) FantuanPhotoViewController *fantuanPhotoViewController;

@end

@implementation FantuanPhotoViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  self.fantuanPhotoViewController = [[FantuanPhotoViewController alloc] init];
  self.fantuanPhotoViewController.view.backgroundColor = [UIColor redColor];
  return self.fantuanPhotoViewController.view;
}

RCT_EXPORT_VIEW_PROPERTY(showTitle, NSString)
//RCT_EXPORT_VIEW_PROPERTY(imageUrl, NSString)
RCT_EXPORT_VIEW_PROPERTY(onRefreshData, RCTBubblingEventBlock)

RCT_EXPORT_METHOD(updateTableView:(NSArray *)models) {
  [self.fantuanPhotoViewController updateTableViewWithModels:models];
}

RCT_EXPORT_METHOD(clearCache) {
  [self.fantuanPhotoViewController clearCache];
}

RCT_EXPORT_METHOD(getCacheSizeWithCallback:(RCTResponseSenderBlock)callback) {
  NSString *size = [self.fantuanPhotoViewController getCacheSize];
  callback(@[[NSNull null],size]);
}
 

//RCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {
//  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
//    MyCustomButton *view = (MyCustomButton *)viewRegistry[reactTag];
//      if (!view || ![view isKindOfClass:[MyCustomButton class]]) {
//          RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
//          return;
//      }
//      [view callNativeMethod];
//  }];
//}

//RCT_EXPORT_METHOD(textFunc:(nonnull NSNumber *)reactTag) {
//  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
//    FantuanPhotoView *view = (FantuanPhotoView *)viewRegistry[reactTag];
//    if (![view isKindOfClass:[FantuanPhotoView class]]) {
//      RCTLogError(@"Invalid view returned from registry, expecting LLCustomView, got: %@", view);
//    } else {
//      dispatch_async(dispatch_get_main_queue(), ^{
//        FantuanPhotoView *fantuanView = (FantuanPhotoView *)viewRegistry[reactTag];
//        [fantuanView textFunc];
//      });
//    }
//  }];
//}

@end
