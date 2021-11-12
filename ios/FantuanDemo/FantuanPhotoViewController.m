//
//  FantuanPhotoViewController.m
//  FantuanDemo
//
//  Created by Ricky on 2021/10/20.
//

#import "FantuanPhotoViewController.h"
#import "FantuanPhotoCell.h"

#import <Masonry/Masonry.h>
#import <SDWebImage/SDImageCache.h>
#import <MJRefresh/MJRefreshAutoNormalFooter.h>

@interface FantuanPhotoViewController ()<UITableViewDelegate, UITableViewDataSource>

@property (nonatomic, strong) UITableView *tableView;

@property (nonatomic, strong) NSMutableArray *dataArray;

@end

@implementation FantuanPhotoViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self.view addSubview:self.tableView];
  [self.tableView mas_makeConstraints:^(MASConstraintMaker *make) {
    make.left.right.top.bottom.equalTo(@0);
  }];
}

- (void)updateTableViewWithModels:(NSArray *)models {
  [self.dataArray addObjectsFromArray:models];
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.tableView reloadData];
  });
}

- (void)clearCache {
  [self.dataArray removeAllObjects];
  [[SDImageCache sharedImageCache] clearDiskOnCompletion:^{
  }];
  [[SDImageCache sharedImageCache] clearMemory];
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.tableView reloadData];
  });
}

- (NSString *)getCacheSize {
  NSUInteger size = [[SDImageCache sharedImageCache] totalDiskSize];
  NSString *cacheString = [self fileSizeWithInterge:size];
  return cacheString;
}

- (void)footerRefreshAction {
  self.onRefreshData(@{@"type" : @"20"});
}

#pragma mark - UITableViewDatasource
- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
  return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.dataArray.count;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
  return 80;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  
  FantuanPhotoCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell" forIndexPath:indexPath];
  [cell updateViewWithUrl:[self.dataArray objectAtIndex:indexPath.row]];
  return cell;
}

#pragma mark - Getter
- (UITableView *)tableView {
  if (!_tableView) {
    _tableView = [[UITableView alloc] initWithFrame:CGRectZero style:UITableViewStyleGrouped];
    _tableView.delegate = self;
    _tableView.dataSource = self;
    _tableView.showsVerticalScrollIndicator = NO;
    _tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    [_tableView registerClass:[FantuanPhotoCell class] forCellReuseIdentifier:@"cell"];
//    __weak __typeof(self) weakSelf = self;
//    _tableView.mj_footer = [MJRefreshAutoNormalFooter footerWithRefreshingBlock:^{
//      __strong __typeof(weakSelf) strongSelf = weakSelf;
//        [strongSelf footerRefreshAction];
//    }];
  }
  return _tableView;
}

- (NSMutableArray *)dataArray {
  if(!_dataArray){
    _dataArray=[[NSMutableArray alloc] init];
  }
  return _dataArray;
}

- (NSString *)fileSizeWithInterge:(NSInteger)size {
  // 1k = 1024, 1m = 1024k
  if (size < 1024) { //小于1k
    return [NSString stringWithFormat:@"%ldB",(long)size];
    
  } else if (size < 1024 * 1024) { //小于1M
    CGFloat cFloat = size / 1024;
    return [NSString stringWithFormat:@"%.1fK",cFloat];
    
  } else if (size < 1024 * 1024 * 1024) { //小于1G
    CGFloat cFloat = size / (1024 * 1024);
    return [NSString stringWithFormat:@"%.1fM",cFloat];
  } else { //大于1G
    CGFloat cFloat = size / (1024 * 1024 * 1024);
    return [NSString stringWithFormat:@"%.1fG",cFloat];
  }
}

- (void)setShowTitle:(NSString *)showTitle {
  NSLog(@"设置了title%@",showTitle);
}

@end
