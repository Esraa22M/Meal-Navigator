import React, { useState, useRef, useContext, useCallback, Suspense } from "react";
import { Pressable } from "react-native";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import {
  ListContainer,
  AppWrapper,
} from "./resturants-screen.styles";
import { HeaderContent } from "../../../../components/header/header.styles";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { MainHeader } from "../../components/main-header/main-header.components";
import { JumpUpButton } from "../../../../ui/jump-up/jump-up-button.components";
import { LocationContext } from "../../../../services/location/location.context";
import { EmptySearch } from "./empty-search/empty-search.components";

// Lazy load components
const RestaurantListView = React.lazy(() => import('../../components/resturants-list/resturants-list.component'));
const ResturantInfoCard = React.lazy(() => import("../../components/resturant-info/resturant-info.components"));

export const ResturantScreen = ({ navigation }) => {
  const { resturants, isLoadingResturants } = useContext(ResturantContext);
  const { error, isLoading } = useContext(LocationContext);

  const handleNavigation = (item) => {
    navigation?.navigate("ResturantDetails", { resturant: item });
  };
  
  const [hideHeader, setHideHeader] = useState(false);
  const flatListRef = useRef();

  const jumpToTop = useCallback(() => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [flatListRef]);

  const handleScroll = useCallback(
    (event) => {
      const scrollY = event.nativeEvent.contentOffset.y;
      if (scrollY >= 50) setHideHeader(true);
      else setHideHeader(false);
    },
    [setHideHeader]
  );

  return (
    <AppWrapper>
      {hideHeader && <JumpUpButton pressHandler={jumpToTop} />}
      {!hideHeader && <MainHeader navigation={navigation} />}
      
      {(isLoadingResturants || isLoading) && <LoadingDataIndicator />}
      
      {!error ? (
        <ListContainer>
          {/* Suspense Wrapper for Lazy-loaded components */}
          <Suspense fallback={<LoadingDataIndicator />}>
            <RestaurantListView
              ref={flatListRef}
              showsVerticalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              ListHeaderComponent={() => (
                <HeaderContent variant="body" style={{ fontSize: 28, padding: 16 }}>
                  Discover the perfect dish that matches your cravings!
                </HeaderContent>
              )}
              data={resturants}
              maxToRenderPerBatch={7}
              renderItem={(dataItem) => {
                return (
                  <Pressable
                    onPress={handleNavigation.bind(this, dataItem.item)}
                  >
                    <Spacer postion={"bottom"} size="large">
                      <ResturantInfoCard resturant={dataItem.item} />
                    </Spacer>
                  </Pressable>
                );
              }}
              keyExtractor={(item) => item.name}
            />
          </Suspense>
        </ListContainer>
      ) : (
        <EmptySearch />
      )}
    </AppWrapper>
  );
};
