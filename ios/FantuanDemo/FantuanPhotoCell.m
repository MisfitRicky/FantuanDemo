//
//  FantuanPhotoCell.m
//  FantuanDemo
//
//  Created by Ricky on 2021/10/20.
//

#import "FantuanPhotoCell.h"
#import <Masonry/Masonry.h>
#import <SDWebImage/SDWebImage.h>
#import <SDWebImage/SDImageCache.h>

@interface FantuanPhotoCell()

@property (nonatomic, strong) UIImageView *photoImageView;

@property (nonatomic, strong) UIView *lineView;

@property (nonatomic, strong) UILabel *isCacheLabel;

@property (nonatomic, strong) UILabel *imageSizeLabel;

@end

@implementation FantuanPhotoCell

- (instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    if (self = [super initWithStyle:style reuseIdentifier:reuseIdentifier]) {
        [self setupView];
    }
    
    return self;
}

- (void)setupView {
  self.selectionStyle = UITableViewCellSelectionStyleNone;
  
  [self.contentView addSubview:self.photoImageView];
  [self.photoImageView mas_makeConstraints:^(MASConstraintMaker *make) {
    make.left.equalTo(@20);
    make.top.bottom.equalTo(@0);
    make.width.equalTo(@80);
  }];
  
  [self.contentView addSubview:self.isCacheLabel];
  [self.isCacheLabel mas_makeConstraints:^(MASConstraintMaker *make) {
    make.left.equalTo(self.photoImageView.mas_right).offset(20);
    make.centerY.equalTo(self.mas_centerY).offset(-20);
  }];
  
  [self.contentView addSubview:self.imageSizeLabel];
  [self.imageSizeLabel mas_makeConstraints:^(MASConstraintMaker *make) {
    make.left.equalTo(self.photoImageView.mas_right).offset(20);
    make.centerY.equalTo(self.mas_centerY).offset(20);
  }];
  
  [self.contentView addSubview:self.lineView];
  [self.lineView mas_makeConstraints:^(MASConstraintMaker *make) {
    make.left.right.bottom.equalTo(@0);
    make.height.equalTo(@0.5);
  }];
}

- (void)updateViewWithUrl:(NSString *)imageUrl {
  BOOL isExist = [[SDImageCache sharedImageCache] diskImageDataExistsWithKey:imageUrl];
  BOOL isExistMemory = [[SDImageCache sharedImageCache] imageFromMemoryCacheForKey:imageUrl];
  if (isExist || isExistMemory) {
    self.isCacheLabel.text = @"缓存中加载";
  } else {
    self.isCacheLabel.text = @"第一次加载";
  }
  __weak __typeof(self) weakSelf = self;
  [self.photoImageView sd_setImageWithURL:[NSURL URLWithString:imageUrl] completed:^(UIImage * _Nullable image, NSError * _Nullable error, SDImageCacheType cacheType, NSURL * _Nullable imageURL) {
    __strong __typeof(weakSelf) strongSelf = weakSelf;
    strongSelf.imageSizeLabel.text = [NSString stringWithFormat:@"图片大小%.0f X %.0f",image.size.width,image.size.height];
  }];
}

#pragma mark - Getter
- (UIImageView *)photoImageView {
  if (!_photoImageView) {
    _photoImageView = [[UIImageView alloc] init];
  }
  return _photoImageView;
}

- (UILabel *)isCacheLabel {
    if (!_isCacheLabel) {
      _isCacheLabel = [[UILabel alloc] init];
      _isCacheLabel.font = [UIFont fontWithName:@"PingFangSC-Regular" size:15];
      _isCacheLabel.textColor = [UIColor blackColor];
    }
    return _isCacheLabel;
}

- (UILabel *)imageSizeLabel {
    if (!_imageSizeLabel) {
      _imageSizeLabel = [[UILabel alloc] init];
      _imageSizeLabel.font = [UIFont fontWithName:@"PingFangSC-Regular" size:15];
      _imageSizeLabel.textColor = [UIColor blackColor];
    }
    return _imageSizeLabel;
}

- (UIView *)lineView {
    if (!_lineView) {
        _lineView = [[UIView alloc] init];
        _lineView.backgroundColor = [UIColor grayColor];
    }
    return _lineView;
}

@end
