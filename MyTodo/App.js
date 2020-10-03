/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#E1ECEC',
              flexDirection: 'row',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('keluar!');
              }}>
              <View>
                <Image
                  source={require('./src/assets/taskbar.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginLeft: 5, fontWeight: 'bold'}}>
              Kakak Asuh Indonesia
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => {
                alert('Daftar belum di buat oleh ketua');
              }}>
              <View
                style={{
                  margin: 5,
                  backgroundColor: 'pink',
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Image
                  source={require('./src/assets/parent.png')}
                  style={{width: 40, height: 40, alignSelf: 'center'}}
                />
                <Text style={{alignSelf: 'center'}}>Pilih Adik Asuh</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('Jumlah tidak di ketahui.');
              }}>
              <View
                style={{
                  margin: 5,
                  backgroundColor: 'pink',
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    fontSize: 25,
                  }}>
                  83
                </Text>
                <Text style={{alignSelf: 'center'}}>Santri Mandiri</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('Jumlah tidak di ketahui juga oleh team.');
              }}>
              <View
                style={{
                  margin: 5,
                  backgroundColor: 'pink',
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    fontSize: 25,
                  }}>
                  71
                </Text>
                <Text style={{textAlign: 'center'}}>Santri Belum Mandiri</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('Alhamdulillah.');
              }}>
              <View
                style={{
                  margin: 5,
                  backgroundColor: 'pink',
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./src/assets/parent.png')}
                  style={{width: 40, height: 40, alignSelf: 'center'}}
                />
                <Text style={{textAlign: 'center'}}>Santri pondok</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <Text style={{fontWeight: 'bold', fontSize: 20, marginStart: 10}}>
            Adik Asuh Saya
          </Text>

          <View
            style={{
              margin: 10,
              backgroundColor: 'pink',
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              borderRadius: 10,
            }}>
            {/* view Nama1 */}
            <TouchableOpacity
              onPress={() => {
                alert('Alfin Mardani');
              }}>
              <View>
                <Image
                  source={require('./src/assets/avatar.png')}
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                    marginTop: 10,
                    marginLeft: 20,
                  }}
                />
                <Text style={{marginLeft: 20}}>Nama Adek Asuh</Text>
              </View>
            </TouchableOpacity>

            {/* view transfer1 */}
            <View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    alert('Bulanan');
                  }}>
                  <View>
                    <Image
                      source={require('./src/assets/transfer.png')}
                      style={{
                        width: 40,
                        height: 40,
                        alignSelf: 'center',
                        marginTop: 10,
                        marginRight: 10,
                      }}
                    />
                    <Text style={{marginRight: 10}}>Transfer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* view Konfirmasi1 */}
            <TouchableOpacity
              onPress={() => {
                alert('Akan di kirim dalam bulanan.');
              }}>
              <View>
                <Image
                  source={require('./src/assets/confirm.png')}
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                    marginTop: 10,
                    marginRight: 20,
                  }}
                />
                <Text style={{marginRight: 20}}>Konfirmasi</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              margin: 10,
              backgroundColor: 'pink',
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              borderRadius: 10,
            }}>
            {/* View Nama2 */}
            <View>
              <Image
                source={require('./src/assets/taskbar.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginLeft: 20,
                }}
              />
              <Text style={{marginLeft: 20}}>Nama Adek Asuh</Text>
            </View>

            {/* view transfer2 */}
            <View>
              <Image
                source={require('./src/assets/taskbar.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <Text style={{marginRight: 10}}>Transfer</Text>
            </View>

            {/* view Konfirmasi2 */}
            <View>
              <Image
                source={require('./src/assets/taskbar.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  marginRight: 20,
                }}
              />
              <Text style={{marginRight: 20}}>Konfirmasi</Text>
            </View>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
            Tentang Pondok IT
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              backgroundColor: '#E1ECEC',
              alignContent: 'center',
              margin: 10,
              borderRadius: 10,
            }}>
            Pondok IT adalah sebuah tempat pendidikan IT Non formal berbasis
            pondok yang berada di yogyakarta, Membekali santrinya dengan skill
            IT & ilmu agama Dan mengarahkan santri belajar sesuai PASSION
            mereka.
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
            Visi
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              backgroundColor: '#E1ECEC',
              alignContent: 'center',
              margin: 10,
              borderRadius: 10,
            }}>
            Mejadi lembaga pendidikan terbaik di indonesia yang dapat
            menciptakan santri yang Bertaqwa,profesional,mandiri dan berbagi
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
            Misi
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              backgroundColor: '#E1ECEC',
              alignContent: 'center',
              margin: 10,
              borderRadius: 10,
            }}>
            Santri memiliki semangat mempelajari agama dan mengamalkannya
            (betaqwa ). Santri belajar dan bekerja sesuai dengan niat dan bakat
            ( profesional ). Setelah enam bulan santri dapat mandiri ( mandiri
            ). Setelah enam bulan santri bisa berbagi untuk pondok ( berbagi ).
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default App;
