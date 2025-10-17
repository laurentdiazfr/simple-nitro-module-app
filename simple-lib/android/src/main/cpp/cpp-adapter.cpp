#include <jni.h>
#include "NitroSimpleLibOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::simplelib::initialize(vm);
}
